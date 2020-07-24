import AppError from '@shared/errors/AppError'

import FakeClientsRepository from '../repositories/fakes/FakeClientsRepository'
import CreateClientService from './CreateClientService'

let fakeClientsRepository: FakeClientsRepository
let createClient: CreateClientService

describe('CreateClient', () => {
  beforeEach(() => {
    fakeClientsRepository = new FakeClientsRepository()

    createClient = new CreateClientService(fakeClientsRepository)
  })

  it('should be able to create a new client', async () => {
    const client = await createClient.execute({
      user_id: 'valid-user-id',
      plan_id: 'valid-plan-id',
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
    })

    expect(client).toHaveProperty('id')
  })

  it('should be able to create a new client with same email from another manager', async () => {
    const client1 = await createClient.execute({
      user_id: 'valid-user-id',
      plan_id: 'valid-plan-id',
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
    })

    const client2 = await createClient.execute({
      user_id: 'another-valid-user-id',
      plan_id: 'valid-plan-id',
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
    })

    expect(client1.email).toBe('josephmonkey@gmail.com')
    expect(client2.email).toBe('josephmonkey@gmail.com')
  })

  it('should not be able to create a new client with existing email', async () => {
    await createClient.execute({
      user_id: 'valid-user-id',
      plan_id: 'valid-plan-id',
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
    })

    await expect(
      createClient.execute({
        user_id: 'valid-user-id',
        plan_id: 'valid-plan-id',
        name: 'Joseph Monkey',
        email: 'josephmonkey@gmail.com',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
