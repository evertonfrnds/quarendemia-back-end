import { injectable, inject } from 'tsyringe'
import AppError from '@shared/errors/AppError'
import IPaymentRepository from '../repositories/IPaymentRepository'

interface IRequest {
  id: string
}

@injectable()
class DeletePaymentService {
  constructor(
    @inject('PaymentRepository')
    private paymentRepository: IPaymentRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    const payment = await this.paymentRepository.findById(id)

    if (!payment) {
      throw new AppError('Pagamento não encontrada')
    }

    await this.paymentRepository.delete(id)
  }
}

export default DeletePaymentService
