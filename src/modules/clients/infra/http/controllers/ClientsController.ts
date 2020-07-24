import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import CreateClientService from '@modules/clients/services/CreateClientService'
import ListClientsService from '@modules/clients/services/ListClientsService'
import UpdateClientService from '@modules/clients/services/UpdateClientService'
import ShowClientService from '@modules/clients/services/ShowClientService'
import DeleteClientService from '@modules/clients/services/DeleteClientService'

export default class ClientController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const listClients = container.resolve(ListClientsService)

    const clients = await listClients.execute({ user_id: id })

    return response.json(classToClass(clients))
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const showClient = container.resolve(ShowClientService)

    const client = await showClient.execute({ client_id: id })

    return response.json(classToClass(client))
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const { name, email, plan_id } = request.body
    const createClient = container.resolve(CreateClientService)

    const client = await createClient.execute({
      user_id: id,
      name,
      email,
      plan_id,
    })

    return response.json(classToClass(client))
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email, plan_id } = request.body
    const { id } = request.params

    const updateClient = container.resolve(UpdateClientService)

    const client = await updateClient.execute({
      client_id: id,
      plan_id,
      name,
      email,
    })

    return response.json(classToClass(client))
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const deleteClient = container.resolve(DeleteClientService)

    await deleteClient.execute({
      client_id: id,
    })

    return response.status(204).send()
  }
}
