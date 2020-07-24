import { uuid } from 'uuidv4'

import IListPaymentDTO from '@modules/payment/dtos/IListPaymentsDTO'
import ICreatePaymentDTO from '@modules/payment/dtos/ICreatePaymentDTO'
import IGetTotalPaymentDTO from '@modules/payment/dtos/IGetTotalPaymentDTO'
import Payment from '../../infra/typeorm/entities/Payment'
import IPaymentsRepository from '../IPaymentsRepository'

class FakePaymentsRepository implements IPaymentsRepository {
  private payments: Payment[] = []

  public async findAll({
    user_id,
    month,
    year,
  }: IListPaymentDTO): Promise<Payment[]> {
    const payments = this.payments.filter(
      payment =>
        payment.month === month &&
        payment.year === year &&
        payment.user_id === user_id,
    )

    return payments
  }

  public async getTotalPaymentFromMonth({
    user_id,
    month,
    year,
  }: IGetTotalPaymentDTO): Promise<number> {
    const payments = this.payments.filter(
      payment =>
        payment.month === month &&
        payment.year === year &&
        payment.user_id === user_id,
    )

    const totalPayment = payments.reduce((total: number, { value }) => {
      return total + value
    }, 0)

    return totalPayment
  }

  public async findById(id: string): Promise<Payment | undefined> {
    const findPayment = this.payments.find(payment => payment.id === id)

    return findPayment
  }

  public async create(paymentData: ICreatePaymentDTO): Promise<Payment> {
    const payment = new Payment()

    Object.assign(payment, { id: uuid() }, paymentData)

    this.payments.push(payment)

    return payment
  }

  public async delete(id: string): Promise<void> {
    const findIndex = this.payments.findIndex(
      findPayment => findPayment.id === id,
    )

    this.payments.splice(findIndex, 1)
  }

  public async save(payment: Payment): Promise<Payment> {
    const findIndex = this.payments.findIndex(
      findPayment => findPayment.id === payment.id,
    )

    this.payments[findIndex] = payment

    return payment
  }
}

export default FakePaymentsRepository
