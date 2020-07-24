import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import DeleteUserService from './DeleteUserService'

let fakeUsersRepository: FakeUsersRepository
let deleteUser: DeleteUserService

describe('DeleteUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()

    deleteUser = new DeleteUserService(fakeUsersRepository)
  })

  it('should be able to delete a existing user', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      is_active: true,
      password: '12345678',
    })

    await deleteUser.execute({
      user_id: user.id,
    })

    expect(user.is_active).toBe(false)
  })

  it('should be able to delete a admin if have suficient admins', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'admin',
      is_active: true,
      password: '12345678',
    })

    await fakeUsersRepository.create({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'admin',
      is_active: true,
      password: '12345678',
    })

    await deleteUser.execute({
      user_id: user.id,
    })

    expect(user.is_active).toBe(false)
  })

  it('should not be able to delete a non-existing user', async () => {
    await expect(
      deleteUser.execute({
        user_id: 'non-existing-user',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to delete a admin if do not have suficient admins', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'admin',
      is_active: true,
      password: '12345678',
    })

    await expect(
      deleteUser.execute({
        user_id: user.id,
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
