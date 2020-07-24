import { injectable, inject } from 'tsyringe'
import IPaymentsRepository from '../repositories/IPaymentsRepository'

interface IRequest {
  user_id: string
  month: number
  year: number
}

@injectable()
class GetTotalPaymentService {
  constructor(
    @inject('PaymentsRepository')
    private paymentsRepository: IPaymentsRepository,
  ) {}

  public async execute({ user_id, month, year }: IRequest): Promise<number> {
    const payments = await this.paymentsRepository.getTotalPaymentFromMonth({
      user_id,
      month,
      year,
    })

    return payments
  }
}

export default GetTotalPaymentService
