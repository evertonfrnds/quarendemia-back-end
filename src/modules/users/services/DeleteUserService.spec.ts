import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'

import CreateUserService from './CreateUserService'
import DeleteUserService from './DeleteUserService'

let fakeUsersRepository: FakeUsersRepository
let fakeHashProvider: FakeHashProvider
let createUser: CreateUserService
let deleteUser: DeleteUserService

describe('DeleteUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    fakeHashProvider = new FakeHashProvider()

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider)
    deleteUser = new DeleteUserService(fakeUsersRepository)
  })

  it('should be able to delete a existing user', async () => {
    const user = await createUser.execute({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      password: '12345678',
    })

    await deleteUser.execute({
      user_id: user.id,
    })

    expect(user.isActive).toBe(false)
  })

  it('should be able to delete a admin if have suficient admins', async () => {
    const user = await createUser.execute({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'admin',
      password: '12345678',
    })

    await createUser.execute({
      name: 'Guilherme Pocoyo',
      email: 'guilhermepocoyo@gmail.com',
      type: 'admin',
      password: '12345678',
    })

    await deleteUser.execute({
      user_id: user.id,
    })

    expect(user.isActive).toBe(false)
  })

  it('should not be able to delete a non-existing user', async () => {
    await expect(
      deleteUser.execute({
        user_id: 'non-existing-user',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to delete a admin if do not have suficient admins', async () => {
    const user = await createUser.execute({
      name: 'Teste',
      email: 'josephmonkey@gmail.com',
      type: 'admin',
      password: '12345678',
    })

    await expect(
      deleteUser.execute({
        user_id: user.id,
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
