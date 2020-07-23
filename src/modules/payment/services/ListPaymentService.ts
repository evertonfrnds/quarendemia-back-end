import Payment from '@modules/payment/infra/typeorm/entities/Payment'
import { injectable, inject } from 'tsyringe'
import IPaymentRepository from '../repositories/IPaymentRepository'

interface IRequest {
  user_id: string
}

@injectable()
class ListPaymentService {
  constructor(
    @inject('PaymentRepository')
    private paymentRepository: IPaymentRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<Payment[]> {
    const payments = await this.paymentRepository.findAll(user_id)

    return payments
  }
}

export default ListPaymentService
