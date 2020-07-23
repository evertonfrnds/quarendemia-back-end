import ICreatePayment from '@modules/payment/dtos/ICreatePaymentDTO'
import Payment from '../infra/typeorm/entities/Payment'

export default interface IPaymentRepository {
  findAll(user_id: string): Promise<Payment[]>
  delete(payment_id: string): Promise<void>
  create(data: ICreatePayment): Promise<Payment>
  save(payment: Payment): Promise<Payment>
}
