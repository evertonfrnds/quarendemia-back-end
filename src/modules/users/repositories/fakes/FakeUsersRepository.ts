import { uuid } from 'uuidv4'

import IUsersRepository from '@modules/users/repositories/IUsersRepository'

import ICreateUsersDTO from '@modules/users/dtos/ICreateUserDTO'
import ISignUpDTO from '@modules/users/dtos/ISignUpDTO'

import User from '../../infra/typeorm/entities/User'

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = []

  public async findAll(): Promise<User[]> {
    return this.users
  }

  public async findById(id: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.id === id)

    return findUser
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email)

    return findUser
  }

  public async countAdms(user_id: string): Promise<number> {
    const admUsers = this.users.filter(
      user =>
        user.type === 'admin' && user.isActive === true && user.id !== user_id,
    )

    return admUsers.length
  }

  public async signUp(signUpData: ISignUpDTO): Promise<User> {
    const user = new User()

    Object.assign(user, { id: uuid() }, signUpData)

    this.users.push(user)

    return user
  }

  public async create(userData: ICreateUsersDTO): Promise<User> {
    const user = new User()

    Object.assign(user, { id: uuid() }, userData)

    this.users.push(user)

    return user
  }

  public async save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id)

    this.users[findIndex] = user

    return user
  }
}

export default FakeUsersRepository
