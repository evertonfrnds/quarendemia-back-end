import AppError from '@shared/errors/AppError'

import FakeClientsRepository from '../repositories/fakes/FakeClientsRepository'
import DeleteClientService from './DeleteClientService'

let fakeClientsRepository: FakeClientsRepository
let deleteClient: DeleteClientService

describe('DeleteClient', () => {
  beforeEach(() => {
    fakeClientsRepository = new FakeClientsRepository()

    deleteClient = new DeleteClientService(fakeClientsRepository)
  })

  it('should be able to delete a existing client', async () => {
    const client = await fakeClientsRepository.create({
      user_id: 'valid-user-id',
      plan_id: 'valid-plan-id',
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      is_active: true,
    })

    await deleteClient.execute({
      id: client.id,
    })

    expect(client.is_active).toBe(false)
  })

  it('should not be able to delete a non-existing client', async () => {
    await expect(
      deleteClient.execute({
        id: 'non-existing-client',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
