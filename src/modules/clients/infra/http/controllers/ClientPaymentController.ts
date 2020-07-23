import { Request, Response } from 'express'
import { container } from 'tsyringe'

import ListDueClients from '@modules/clients/services/ListDueClients'

export default class ClientPaymentController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const { month, year } = request.params
    const listDueClients = container.resolve(ListDueClients)

    const clients = await listDueClients.execute({
      user_id: id,
      month: Number(month),
      year: Number(year),
    })

    return response.json(clients)
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    return response.send('InDeveloper')
  }
}
