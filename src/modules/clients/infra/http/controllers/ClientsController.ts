import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import ListClientsService from '@modules/clients/services/ListClientsService'
import CreateClientService from '@modules/clients/services/CreateClientService'
import UpdateClientService from '@modules/clients/services/UpdateClientService'
import DeleteClientService from '@modules/clients/services/DeleteClientService'

export default class ClientsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listClients = container.resolve(ListClientsService)

    const clients = await listClients.execute()

    return response.json(clients)
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, telefone } = request.body

    const createClient = container.resolve(CreateClientService)

    const client = await createClient.execute({
      name,
      telefone,
    })

    return response.json(classToClass(client))
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, telefone } = request.body
    const { id } = request.params

    const updateClient = container.resolve(UpdateClientService)

    const client = await updateClient.execute({
      user_id: id,
      name,
      telefone,
    })

    return response.json(classToClass(client))
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const deleteClient = container.resolve(DeleteClientService)

    await deleteClient.execute({
      user_id: id,
    })

    return response.status(204).send()
  }
}
