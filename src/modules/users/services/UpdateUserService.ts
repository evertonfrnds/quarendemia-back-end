import AppError from '@shared/errors/AppError'

import User from '@modules/users/infra/typeorm/entities/User'
import { injectable, inject } from 'tsyringe'
import IHashProvider from '../providers/HashProvider/models/IHashProvider'
import IUsersRepository from '../repositories/IUsersRepository'

interface IRequest {
  id: string
  name: string
  email: string
  type: string
  is_active: boolean
  password?: string
}

@injectable()
class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    id,
    name,
    email,
    type,
    is_active,
    password,
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(id)

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
      user.password = await this.hashProvider.generateHash(password)
    }

    if (
      (type && type !== 'admin' && user.type === 'admin') ||
      (is_active === false && user.type === 'admin')
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
    user.is_active = is_active

    await this.usersRepository.save(user)

    return user
  }
}

export default UpdateUserService
