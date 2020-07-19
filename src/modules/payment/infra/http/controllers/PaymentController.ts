import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import ListPaymentService from '@modules/payment/services/ListPaymentService'
import CreatePaymentService from '@modules/payment/services/CreatePaymentService'
import DeletePaymentService from '@modules/payment/services/DeletePaymentService'

export default class PaymentController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.body
    const listPayment = container.resolve(ListPaymentService)

    const payments = await listPayment.execute({ id })

    return response.json(payments)
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { client_id, month, year, value } = request.body

    const createPayment = container.resolve(CreatePaymentService)

    const payment = await createPayment.execute({
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
