import FakeClientsRepository from '../repositories/fakes/FakeClientsRepository'
import ListClientsService from './ListClientsService'

let fakeClientsRepository: FakeClientsRepository
let listClients: ListClientsService

describe('ListClient', () => {
  beforeEach(() => {
    fakeClientsRepository = new FakeClientsRepository()

    listClients = new ListClientsService(fakeClientsRepository)
  })

  it('should be able to list all clients', async () => {
    const client1 = await fakeClientsRepository.create({
      user_id: 'valid-user-id',
      plan_id: 'valid-plan-id',
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      is_active: true,
    })

    const client2 = await fakeClientsRepository.create({
      user_id: 'valid-user-id',
      plan_id: 'valid-plan-id',
      name: 'Guilherme Pocoyo',
      email: 'guilhermepocoyo@gmail.com',
      is_active: true,
    })

    const clients = await listClients.execute({ user_id: 'valid-user-id' })

    expect(clients).toEqual([client1, client2])
  })

  it('should only list clients of selected user', async () => {
    const client1 = await fakeClientsRepository.create({
      user_id: 'valid-user-id',
      plan_id: 'valid-plan-id',
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      is_active: true,
    })

    const client2 = await fakeClientsRepository.create({
      user_id: 'valid-user-id',
      plan_id: 'valid-plan-id',
      name: 'Guilherme Pocoyo',
      email: 'guilhermepocoyo@gmail.com',
      is_active: true,
    })

    await fakeClientsRepository.create({
      user_id: 'another-valid-user-id',
      plan_id: 'valid-plan-id',
      name: 'Guilherme Pocoyo',
      email: 'guilhermepocoyo@gmail.com',
      is_active: true,
    })

    const clients = await listClients.execute({ user_id: 'valid-user-id' })

    expect(clients).toEqual([client1, client2])
  })
})
