import Payment from '@modules/payment/infra/typeorm/entities/Payment'
import { injectable, inject } from 'tsyringe'
import IPaymentsRepository from '../repositories/IPaymentsRepository'

interface IRequest {
  user_id: string
  month: number
  year: number
}

@injectable()
class ListPaymentsService {
  constructor(
    @inject('PaymentsRepository')
    private paymentsRepository: IPaymentsRepository,
  ) {}

  public async execute({ user_id, month, year }: IRequest): Promise<Payment[]> {
    const payments = await this.paymentsRepository.findAll({
      user_id,
      month,
      year,
    })

    return payments
  }
}

export default ListPaymentsService
