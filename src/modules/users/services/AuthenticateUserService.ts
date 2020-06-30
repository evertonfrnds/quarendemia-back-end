import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import authConfig from '@config/auth'

import AppError from '@shared/errors/AppError'

import User from '@modules/users/infra/typeorm/entities/User'
import IUsersRepository from '../repositories/IUsersRepository'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: User
  token: string
}

class AuthenticateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Combinação de email/senha incorreto.', 401)
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new AppError('Combinação de email/senha incorreto.', 401)
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({ type: user.type }, secret, {
      subject: user.id,
      expiresIn,
    })

    return { user, token }
  }
}

export default AuthenticateUserService
