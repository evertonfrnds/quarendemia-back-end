import ICreatePayment from '@modules/payment/dtos/ICreatePaymentDTO'
import Payment from '../infra/typeorm/entities/Payment'
import IGetTotalPaymentDTO from '../dtos/IGetTotalPaymentDTO'
import IListPaymentsDTO from '../dtos/IListPaymentsDTO'

export default interface IPaymentRepository {
  getTotalPaymentFromMonth(data: IGetTotalPaymentDTO): Promise<number>
  findAll(data: IListPaymentsDTO): Promise<Payment[]>
  findById(id: string): Promise<Payment | undefined>
  delete(id: string): Promise<void>
  create(data: ICreatePayment): Promise<Payment>
  save(payment: Payment): Promise<Payment>
}
