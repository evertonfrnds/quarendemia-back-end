import Payment from '@modules/payment/infra/typeorm/entities/Payment'
import { injectable, inject } from 'tsyringe'
import IClientsRepository from '@modules/clients/repositories/IClientsRepository'
import AppError from '@shared/errors/AppError'
import IPaymentsRepository from '../repositories/IPaymentsRepository'

interface IRequest {
  user_id: string
  client_id: string
  month: number
  year: number
}

@injectable()
class CreatePaymentService {
  constructor(
    @inject('PaymentsRepository')
    private paymentsRepository: IPaymentsRepository,

    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute({
    user_id,
    client_id,
    month,
    year,
  }: IRequest): Promise<Payment> {
    const client = await this.clientsRepository.findById(client_id)

    if (!client) {
      throw new AppError('Cliente não encontrado')
    }

    if (!client.plan_id) {
      throw new AppError('Cliente não possui plano')
    }

    const payment = await this.paymentsRepository.create({
      user_id,
      client_id,
      month,
      year,
      value: client.plan.value,
    })

    return payment
  }
}

export default CreatePaymentService
