import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import AppError from '../errors/AppError'

import User from '../models/User'

interface Request {
  user_id: string
  name: string
  email: string
  type: string
  isActive: boolean
  password: string
}

class UpdateUserService {
  public async execute({
    user_id,
    name,
    email,
    type,
    isActive,
    password,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User)

    const user = await usersRepository.findOne(user_id)

    if (!user) {
      throw new AppError('Usuário não encontrado.')
    }

    if (email && user.email !== email) {
      const checkUserExists = await usersRepository.findOne({
        where: { email },
      })

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
      isActive === false
    ) {
      const admCount = await usersRepository.count({
        where: { isActive: true, type: 'admin' },
      })

      if (admCount < 2) {
        throw new AppError(
          'A aplicação deve possuir pelo menos um administrador ativo.',
        )
      }
    }

    user.name = name
    user.email = email
    user.type = type
    user.isActive = isActive

    await usersRepository.save(user)

    return user
  }
}

export default UpdateUserService
