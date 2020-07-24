import ICreateClientDTO from '../dtos/ICreateClientDTO'
import Client from '../infra/typeorm/entities/Client'

export default interface IClientRepository {
  findAllByUserId(user_id: string): Promise<Client[]>
  findById(id: string): Promise<Client | undefined>
  findByEmail(email: string): Promise<Client | undefined>
  create(data: ICreateClientDTO): Promise<Client>
  save(client: Client): Promise<Client>
}
