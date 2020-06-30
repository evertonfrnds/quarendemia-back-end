import { hash } from 'bcryptjs'

import AppError from '@shared/errors/AppError'

import User from '@modules/users/infra/typeorm/entities/User'
import IUsersRepository from '../repositories/IUsersRepository'

interface IRequest {
  name: string
  email: string
  password: string
}

class SignUpService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email)

    if (checkUserExists) {
      throw new AppError(
        'E-mail já existente na base de dados, tente outro e-mail.',
      )
    }

    const hashedPassword = await hash(password, 8)

    const user = await this.usersRepository.signUp({
      name,
      email,
      password: hashedPassword,
    })

    return user
  }
}

export default SignUpService
