import Payment from '@modules/payment/infra/typeorm/entities/Payment'
import { injectable, inject } from 'tsyringe'
import IPaymentRepository from '../repositories/IPaymentRepository'

interface IRequest {
  user_id: string
  month: number
  year: number
}

@injectable()
class ListPaymentService {
  constructor(
    @inject('PaymentRepository')
    private paymentRepository: IPaymentRepository,
  ) {}

  public async execute({ user_id, month, year }: IRequest): Promise<Payment[]> {
    const payments = await this.paymentRepository.findAll({
      user_id,
      month,
      year,
    })

    return payments
  }
}

export default ListPaymentService
