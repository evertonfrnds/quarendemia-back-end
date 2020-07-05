import AppError from '@shared/errors/AppError'
import User from '@modules/users/infra/typeorm/entities/User'
import { injectable, inject } from 'tsyringe'
import IUsersRepository from '../repositories/IUsersRepository'
import IHashProvider from '../providers/HashProvider/models/IHashProvider'

interface IRequest {
  name: string
  email: string
  type: string
  password: string
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    name,
    email,
    type,
    password,
  }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email)

    if (checkUserExists) {
      throw new AppError(
        'E-mail já existente na base de dados, tente outro e-mail.',
      )
    }

    const hashedPassword = await this.hashProvider.generateHash(password)

    const user = await this.usersRepository.create({
      name,
      email,
      type,
      password: hashedPassword,
      isActive: true,
    })

    return user
  }
}

export default CreateUserService
