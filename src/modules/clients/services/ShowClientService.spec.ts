import AppError from '@shared/errors/AppError'

import FakeClientsRepository from '../repositories/fakes/FakeClientsRepository'
import ShowClientService from './ShowClientService'

let fakeClientsRepository: FakeClientsRepository
let showClient: ShowClientService

describe('ShowClient', () => {
  beforeEach(() => {
    fakeClientsRepository = new FakeClientsRepository()

    showClient = new ShowClientService(fakeClientsRepository)
  })

  it('should be able to show client', async () => {
    const client = await fakeClientsRepository.create({
      user_id: 'valid-user-id',
      plan_id: 'valid-plan-id',
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      is_active: true,
    })

    const getClient = await showClient.execute({
      id: client.id,
    })

    expect(getClient.name).toBe('Joseph Monkey')
    expect(getClient.email).toBe('josephmonkey@gmail.com')
  })

  it('should not be able to show client from non-existing client', async () => {
    await expect(
      showClient.execute({
        id: 'non-existing-client',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
