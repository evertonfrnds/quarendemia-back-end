import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import ShowManagerProfileService from './ShowManagerProfileService'

let fakeUsersRepository: FakeUsersRepository
let showManagerProfile: ShowManagerProfileService

describe('ShowManagerProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()

    showManagerProfile = new ShowManagerProfileService(fakeUsersRepository)
  })

  it('should be able to show manager profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      is_active: true,
      password: '12345678',
    })

    const profile = await showManagerProfile.execute({
      id: user.id,
    })

    expect(profile.name).toBe('Joseph Monkey')
    expect(profile.email).toBe('josephmonkey@gmail.com')
  })

  it('should not be able to show manager profile from non-existing user', async () => {
    await expect(
      showManagerProfile.execute({
        id: 'non-existing-user',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
