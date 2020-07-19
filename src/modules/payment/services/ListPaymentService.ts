import Payment from '@modules/payment/infra/typeorm/entities/Payment'
import { injectable, inject } from 'tsyringe'
import IPaymentRepository from '../repositories/IPaymentRepository'

interface IRequest {
  id: string
}

@injectable()
class ListPaymentService {
  constructor(
    @inject('PaymentRepository')
    private paymentRepository: IPaymentRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Payment[]> {
    const payments = await this.paymentRepository.findAll(id)

    return payments
  }
}

export default ListPaymentService
