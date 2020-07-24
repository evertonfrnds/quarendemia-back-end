import { getRepository, Repository } from 'typeorm'

import IDueClientsRepository from '@modules/clients/repositories/IDueClientsRepository'

import Client from '../entities/Client'

class DueClientRepository implements IDueClientsRepository {
  private ormRepository: Repository<Client>

  constructor() {
    this.ormRepository = getRepository(Client)
  }

  findAll(user_id: string, month: number, year: number): Promise<Client[]> {
    const query = `
    SELECT * from clients where user_id = '${user_id}'
    and is_active = 'true' and not exists
    (SELECT * from payments where clients.id = payments.client_id
        and payments.month = ${month}
        and payments.year = ${year});`
    const dueClients = this.ormRepository.query(query)

    return dueClients
  }
}

export default DueClientRepository
