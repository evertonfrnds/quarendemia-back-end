import { injectable, inject } from 'tsyringe'
import IPaymentRepository from '../repositories/IPaymentRepository'

interface IRequest {
  payment_id: string
}

@injectable()
class DeletePaymentService {
  constructor(
    @inject('PaymentRepository')
    private paymentRepository: IPaymentRepository,
  ) {}

  public async execute({ payment_id }: IRequest): Promise<void> {
    const payment = await this.paymentRepository.delete(payment_id)

    return payment
  }
}

export default DeletePaymentService
