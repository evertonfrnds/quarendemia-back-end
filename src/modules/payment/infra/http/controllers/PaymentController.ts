import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import ListPaymentService from '@modules/payment/services/ListPaymentService'
import CreatePaymentService from '@modules/payment/services/CreatePaymentService'
import DeletePaymentService from '@modules/payment/services/DeletePaymentService'

export default class PaymentController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const listPayment = container.resolve(ListPaymentService)

    const payments = await listPayment.execute({ user_id: id })

    return response.json(payments)
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const { client_id, month, year, value } = request.body

    const createPayment = container.resolve(CreatePaymentService)

    const payment = await createPayment.execute({
      user_id: id,
      client_id,
      month,
      year,
      value,
    })

    return response.json(classToClass(payment))
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const deletePayment = container.resolve(DeletePaymentService)

    await deletePayment.execute({ payment_id: id })

    return response.status(204).send()
  }
}
