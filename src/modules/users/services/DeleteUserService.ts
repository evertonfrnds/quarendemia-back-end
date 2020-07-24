import AppError from '@shared/errors/AppError'

import { inject, injectable } from 'tsyringe'
import IUsersRepository from '../repositories/IUsersRepository'

interface IRequest {
  user_id: string
}

@injectable()
class DeleteUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id)

    if (!user) {
      throw new AppError('Usuário não encontrado.')
    }

    if (user.type === 'admin') {
      const admsCount = await this.usersRepository.countAdms(user.id)

      if (admsCount === 0) {
        throw new AppError(
          'A aplicação deve possuir pelo menos um administrador ativo.',
        )
      }
    }

    user.is_active = false

    await this.usersRepository.save(user)
  }
}

export default DeleteUserService
