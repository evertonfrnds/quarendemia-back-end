import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import ListUsersService from './ListUsersService'

let fakeUsersRepository: FakeUsersRepository
let listUsers: ListUsersService

describe('ListUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()

    listUsers = new ListUsersService(fakeUsersRepository)
  })

  it('should be able to list all users', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      isActive: true,
      password: '12345678',
    })

    const user2 = await fakeUsersRepository.create({
      name: 'Guilherme Pocoyi',
      email: 'guilhermepocoyo@gmail.com',
      type: 'common',
      isActive: true,
      password: '12345678',
    })

    const users = await listUsers.execute()

    expect(users).toEqual([user1, user2])
  })
})
