import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'

import CreateUserService from './CreateUserService'

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const fakeHashProvider = new FakeHashProvider()

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    )

    const user = await createUser.execute({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      password: '12345678',
    })

    expect(user).toHaveProperty('id')
  })

  it('should not be able to create a new user with existing email', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const fakeHashProvider = new FakeHashProvider()

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    )

    await createUser.execute({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      password: '12345678',
    })

    expect(
      createUser.execute({
        name: 'Joseph Monkey',
        email: 'josephmonkey@gmail.com',
        type: 'common',
        password: '12345678',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})