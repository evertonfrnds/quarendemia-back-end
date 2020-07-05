import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'

import CreateUserService from './CreateUserService'
import ListUsersService from './ListUsersService'

let fakeUsersRepository: FakeUsersRepository
let fakeHashProvider: FakeHashProvider
let createUser: CreateUserService
let listUsers: ListUsersService

describe('ListUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    fakeHashProvider = new FakeHashProvider()

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider)
    listUsers = new ListUsersService(fakeUsersRepository)
  })

  it('should be able to list all users', async () => {
    const user1 = await createUser.execute({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      password: '12345678',
    })

    const user2 = await createUser.execute({
      name: 'Guilherme Pocoyo',
      email: 'guilhermepocoyo@gmail.com',
      type: 'common',
      password: '12345678',
    })

    const users = await listUsers.execute()

    expect(users).toEqual([user1, user2])
  })
})
