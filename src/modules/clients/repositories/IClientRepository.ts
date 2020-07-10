import ICreateClientDTO from '../dtos/ICreateClientDTO'
import Client from '../infra/typeorm/entities/Client'

export default interface IClientRepository {
  findAllById(id: string): Promise<Client[]>
  findById(id: string): Promise<Client | undefined>
  delete(client_id: string): Promise<void>
  create(data: ICreateClientDTO): Promise<Client>
  save(client: Client): Promise<Client>
}
