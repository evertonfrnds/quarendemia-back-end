import User from '@modules/users/infra/typeorm/entities/User'
import { injectable, inject } from 'tsyringe'
import IUsersRepository from '../repositories/IUsersRepository'

@injectable()
class ListUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(): Promise<User[]> {
    const users = await this.usersRepository.findAll()

    return users
  }
}

export default ListUsersService
