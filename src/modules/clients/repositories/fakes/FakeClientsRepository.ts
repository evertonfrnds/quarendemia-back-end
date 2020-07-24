import { uuid } from 'uuidv4'

import IClientsRepository from '@modules/clients/repositories/IClientsRepository'

import ICreateClientsDTO from '@modules/clients/dtos/ICreateClientDTO'

import Client from '../../infra/typeorm/entities/Client'

class FakeClientsRepository implements IClientsRepository {
  private clients: Client[] = []

  public async findAllByUserId(user_id: string): Promise<Client[]> {
    const clients = this.clients.filter(client => client.user_id === user_id)

    return clients
  }

  public async findById(id: string): Promise<Client | undefined> {
    const findClient = this.clients.find(client => client.id === id)

    return findClient
  }

  public async findByEmail(email: string): Promise<Client | undefined> {
    const findClient = this.clients.find(client => client.email === email)

    return findClient
  }

  public async create(clientData: ICreateClientsDTO): Promise<Client> {
    const client = new Client()

    Object.assign(client, { id: uuid() }, clientData)

    this.clients.push(client)

    return client
  }

  public async save(client: Client): Promise<Client> {
    const findIndex = this.clients.findIndex(
      findClient => findClient.id === client.id,
    )

    this.clients[findIndex] = client

    return client
  }
}

export default FakeClientsRepository
