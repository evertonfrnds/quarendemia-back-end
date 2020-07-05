import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'

import SignUpManager from './SignUpManagerService'

let fakeUsersRepository: FakeUsersRepository
let fakeHashProvider: FakeHashProvider
let signUpManager: SignUpManager

describe('SignUpManager', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    fakeHashProvider = new FakeHashProvider()

    signUpManager = new SignUpManager(fakeUsersRepository, fakeHashProvider)
  })

  it('should be able to sign up', async () => {
    const user = await signUpManager.execute({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      password: '12345678',
    })

    expect(user).toHaveProperty('id')
  })

  it('should not be able to sign up with existing email', async () => {
    await signUpManager.execute({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      password: '12345678',
    })

    await expect(
      signUpManager.execute({
        name: 'Joseph Monkey',
        email: 'josephmonkey@gmail.com',
        password: '12345678',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
