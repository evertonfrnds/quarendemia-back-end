import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import ListPaymentsService from '@modules/payment/services/ListPaymentsService'
import CreatePaymentService from '@modules/payment/services/CreatePaymentService'
import DeletePaymentService from '@modules/payment/services/DeletePaymentService'
import GetTotalPaymentService from '@modules/payment/services/GetTotalPaymentService'

export default class PaymentsController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const { month, year } = request.params
    const getTotalPayment = container.resolve(GetTotalPaymentService)

    const totalPayment = await getTotalPayment.execute({
      user_id: id,
      month: Number(month),
      year: Number(year),
    })

    return response.json(totalPayment)
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const { month, year } = request.params
    const listPayments = container.resolve(ListPaymentsService)

    const payments = await listPayments.execute({
      user_id: id,
      month: Number(month),
      year: Number(year),
    })

    return response.json(payments)
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const { client_id, month, year } = request.body

    const createPayment = container.resolve(CreatePaymentService)

    const payment = await createPayment.execute({
      user_id: id,
      client_id,
      month,
      year,
    })

    return response.json(classToClass(payment))
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const deletePayment = container.resolve(DeletePaymentService)

    await deletePayment.execute({ id })

    return response.status(204).send()
  }
}
