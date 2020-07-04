import { hash } from 'bcryptjs'

import AppError from '@shared/errors/AppError'

import User from '@modules/users/infra/typeorm/entities/User'
import { injectable, inject } from 'tsyringe'
import IUsersRepository from '../repositories/IUsersRepository'

interface IRequest {
  user_id: string
  name: string
  email: string
  type: string
  isActive: boolean
  password: string
}

@injectable()
class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    user_id,
    name,
    email,
    type,
    isActive,
    password,
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id)

    if (!user) {
      throw new AppError('Usuário não encontrado.')
    }

    if (email && user.email !== email) {
      const checkUserExists = await this.usersRepository.findByEmail(email)

      if (checkUserExists) {
        throw new AppError(
          'E-mail já existente na base de dados, tente outro e-mail.',
        )
      }
    }

    if (password) {
      user.password = await hash(password, 8)
    }

    if (
      (type && type !== 'admin' && user.type === 'admin') ||
      (isActive === false && user.type === 'admin')
    ) {
      const admsCount = await this.usersRepository.countAdms(user.id)

      if (admsCount === 0) {
        throw new AppError(
          'A aplicação deve possuir pelo menos um administrador ativo.',
        )
      }
    }

    user.name = name
    user.email = email
    user.type = type
    user.isActive = isActive

    await this.usersRepository.save(user)

    return user
  }
}

export default UpdateUserService
