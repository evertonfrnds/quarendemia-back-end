import Client from '../infra/typeorm/entities/Client'

export default interface IDueClients {
  findAll(user_id: string, month: number, year: number): Promise<Client[]>
}
