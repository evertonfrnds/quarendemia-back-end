import Payment from '@modules/payment/infra/typeorm/entities/Payment'
import { injectable, inject } from 'tsyringe'
import IPaymentRepository from '../repositories/IPaymentRepository'

interface IRequest {
  client_id: string
  month: number
  year: number
  value: number
}

@injectable()
class CreatePaymentService {
  constructor(
    @inject('PaymentRepository')
    private paymentRepository: IPaymentRepository,
  ) {}

  public async execute({
    client_id,
    month,
    year,
    value,
  }: IRequest): Promise<Payment> {
    const payment = await this.paymentRepository.create({
      client_id,
      month,
      year,
      value,
    })

    return payment
  }
}

export default CreatePaymentService
