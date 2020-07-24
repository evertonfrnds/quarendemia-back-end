import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import ShowUserService from './ShowUserService'

let fakeUsersRepository: FakeUsersRepository
let showUser: ShowUserService

describe('ShowUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()

    showUser = new ShowUserService(fakeUsersRepository)
  })

  it('should be able to show user', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      is_active: true,
      password: '12345678',
    })

    const profile = await showUser.execute({
      id: user.id,
    })

    expect(profile.name).toBe('Joseph Monkey')
    expect(profile.email).toBe('josephmonkey@gmail.com')
  })

  it('should not be able to show user from non-existing user', async () => {
    await expect(
      showUser.execute({
        id: 'non-existing-user',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
