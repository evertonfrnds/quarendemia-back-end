import AppError from '@shared/errors/AppError'

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import UpdateUserService from './UpdateUserService'

let fakeUsersRepository: FakeUsersRepository
let fakeHashProvider: FakeHashProvider
let updateUser: UpdateUserService

describe('UpdateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    fakeHashProvider = new FakeHashProvider()
    updateUser = new UpdateUserService(fakeUsersRepository, fakeHashProvider)
  })

  it('should be able to update a user', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      is_active: true,
      password: '12345678',
    })

    const updatedUser = await updateUser.execute({
      id: user.id,
      name: 'Joseph Alterado',
      email: 'josephalterado@gmail.com',
      type: 'common',
      is_active: true,
    })

    expect(updatedUser.name).toBe('Joseph Alterado')
    expect(updatedUser.email).toBe('josephalterado@gmail.com')
  })

  it('should be able to update the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      is_active: true,
      password: '12345678',
    })

    const updatedUser = await updateUser.execute({
      id: user.id,
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      is_active: true,
      password: 'nova-senha',
    })

    expect(updatedUser.password).toBe('nova-senha')
  })

  it('should be able to disable a admin if have suficient admins', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'admin',
      is_active: true,
      password: '12345678',
    })

    await fakeUsersRepository.create({
      name: 'Guilherme Pocoyo',
      email: 'guilhermepocoyi@gmail.com',
      type: 'admin',
      is_active: true,
      password: '12345678',
    })

    const updatedUser = await updateUser.execute({
      id: user.id,
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      is_active: false,
      password: '12345678',
    })

    expect(updatedUser.type).toBe('common')
    expect(updatedUser.is_active).toBe(false)
  })

  it('should not be able to update a non-existing user', async () => {
    await expect(
      updateUser.execute({
        id: 'non-existing-userid',
        name: 'Joseph Monkey',
        email: 'josephmonkey@gmail.com',
        type: 'common',
        is_active: true,
        password: '1234567890',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to change a user email if new email already exists', async () => {
    await fakeUsersRepository.create({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      is_active: true,
      password: '12345678',
    })

    const user = await fakeUsersRepository.create({
      name: 'João Pé de Feijão',
      email: 'joaofeijao@gmail.com',
      type: 'common',
      is_active: true,
      password: '123456789',
    })

    await expect(
      updateUser.execute({
        id: user.id,
        name: 'João pé de Algodão',
        email: 'josephmonkey@gmail.com',
        type: 'common',
        is_active: true,
        password: '123456789',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to disable a admin if dont have suficient admins', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'admin',
      is_active: true,
      password: '12345678',
    })

    await expect(
      updateUser.execute({
        id: user.id,
        name: 'Joseph Monkey',
        email: 'josephmonkey@gmail.com',
        type: 'common',
        is_active: true,
        password: '12345678',
      }),
    ).rejects.toBeInstanceOf(AppError)
    await expect(
      updateUser.execute({
        id: user.id,
        name: 'Joseph Monkey',
        email: 'josephmonkey@gmail.com',
        type: 'admin',
        is_active: false,
        password: '12345678',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
