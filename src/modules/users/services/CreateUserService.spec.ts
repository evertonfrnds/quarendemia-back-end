import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import CreateUserService from './CreateUserService'

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const createUser = new CreateUserService(fakeUsersRepository)

    const user = await createUser.execute({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      password: '12345678',
    })

    expect(user).toHaveProperty('id')
  })
})
