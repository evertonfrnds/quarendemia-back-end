import { injectable, inject } from 'tsyringe'
import IPaymentRepository from '../repositories/IPaymentRepository'

interface IRequest {
  user_id: string
  month: number
  year: number
}

@injectable()
class GetTotalPaymentService {
  constructor(
    @inject('PaymentRepository')
    private paymentRepository: IPaymentRepository,
  ) {}

  public async execute({ user_id, month, year }: IRequest): Promise<number> {
    const payments = await this.paymentRepository.getTotalPaymentFromMonth({
      user_id,
      month,
      year,
    })

    return payments
  }
}

export default GetTotalPaymentService
