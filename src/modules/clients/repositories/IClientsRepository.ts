import Client from '../infra/typeorm/entities/Client'
import ICreateClientDTO from '../dtos/ICreateClientDTO'

export default interface IClientsRepository {
  findAll(): Promise<Client[]>
  findById(id: string): Promise<Client | undefined>
  create(data: ICreateClientDTO): Promise<Client>
  delete(id: string): Promise<void>
  save(client: Client): Promise<Client>
}
