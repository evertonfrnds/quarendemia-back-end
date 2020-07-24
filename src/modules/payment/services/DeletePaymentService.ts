import { injectable, inject } from 'tsyringe'
import AppError from '@shared/errors/AppError'
import IPaymentsRepository from '../repositories/IPaymentsRepository'

interface IRequest {
  id: string
}

@injectable()
class DeletePaymentService {
  constructor(
    @inject('PaymentsRepository')
    private paymentsRepository: IPaymentsRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    const payment = await this.paymentsRepository.findById(id)

    if (!payment) {
      throw new AppError('Pagamento não encontrada')
    }

    await this.paymentsRepository.delete(id)
  }
}

export default DeletePaymentService
