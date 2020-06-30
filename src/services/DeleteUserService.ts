import { getRepository } from 'typeorm'

import AppError from '../errors/AppError'

import User from '../models/User'

interface Request {
  user_id: string
}

class DeleteUserService {
  public async execute({ user_id }: Request): Promise<void> {
    const usersRepository = getRepository(User)

    const user = await usersRepository.findOne(user_id)

    if (!user) {
      throw new AppError('Usuário não encontrado.')
    }

    if (user.type === 'admin') {
      const admCount = await usersRepository.count({
        where: { isActive: true, type: 'admin' },
      })

      if (admCount < 2) {
        throw new AppError(
          'A aplicação deve possuir pelo menos um administrador ativo.',
        )
      }
    }

    user.isActive = false

    await usersRepository.save(user)
  }
}

export default DeleteUserService
