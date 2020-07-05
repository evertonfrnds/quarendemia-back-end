import AppError from '@shared/errors/AppError'

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import UpdateManagerProfileService from './UpdateManagerProfileService'

let fakeUsersRepository: FakeUsersRepository
let fakeHashProvider: FakeHashProvider
let updateManagerProfile: UpdateManagerProfileService

describe('UpdateManagerProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    fakeHashProvider = new FakeHashProvider()
    updateManagerProfile = new UpdateManagerProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    )
  })

  it('should be able to update user profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      isActive: true,
      password: '12345678',
    })

    const updatedUser = await updateManagerProfile.execute({
      user_id: user.id,
      name: 'Joseph Alterado',
      email: 'josephalterado@gmail.com',
    })

    expect(updatedUser.name).toBe('Joseph Alterado')
    expect(updatedUser.email).toBe('josephalterado@gmail.com')
  })

  it('should not be able to update profile from non-existing user', async () => {
    await expect(
      updateManagerProfile.execute({
        user_id: 'non-existing-userid',
        name: 'Joseph Monkey',
        email: 'josephmonkey@gmail.com',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to change user email if new email already exists', async () => {
    await fakeUsersRepository.create({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      isActive: true,
      password: '12345678',
    })

    const user = await fakeUsersRepository.create({
      name: 'João Pé de Feijão',
      email: 'joaofeijao@gmail.com',
      type: 'common',
      isActive: true,
      password: '123456789',
    })

    await expect(
      updateManagerProfile.execute({
        user_id: user.id,
        name: 'João pé de Algodão',
        email: 'josephmonkey@gmail.com',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should be able to update the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      isActive: true,
      password: '12345678',
    })

    const updatedUser = await updateManagerProfile.execute({
      user_id: user.id,
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      old_password: '12345678',
      password: 'nova-senha',
    })

    expect(updatedUser.password).toBe('nova-senha')
  })

  it('should not be able to update the password without old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      isActive: true,
      password: '12345678',
    })

    await expect(
      updateManagerProfile.execute({
        user_id: user.id,
        name: 'Joseph Monkey',
        email: 'josephmonkey@gmail.com',
        password: 'nova-senha',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to update the password with wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      isActive: true,
      password: '12345678',
    })

    await expect(
      updateManagerProfile.execute({
        user_id: user.id,
        name: 'Joseph Monkey',
        email: 'josephmonkey@gmail.com',
        old_password: 'wrong-old-password',
        password: 'nova-senha',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
