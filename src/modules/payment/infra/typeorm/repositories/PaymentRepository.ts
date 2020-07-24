import { getRepository, Repository } from 'typeorm'

import IPaymentRepository from '@modules/payment/repositories/IPaymentRepository'

import ICreatePaymentDTO from '@modules/payment/dtos/ICreatePaymentDTO'

import IGetTotalPaymentDTO from '@modules/payment/dtos/IGetTotalPaymentDTO'
import IListPaymentsDTO from '@modules/payment/dtos/IListPaymentsDTO'
import Payment from '../entities/Payment'

export default class PaymentRepository implements IPaymentRepository {
  private ormRepository: Repository<Payment>

  constructor() {
    this.ormRepository = getRepository(Payment)
  }

  async getTotalPaymentFromMonth({
    user_id,
    month,
    year,
  }: IGetTotalPaymentDTO): Promise<number> {
    const payments = await this.ormRepository.find({
      where: { user_id, month, year },
    })
    const totalPayment = payments.reduce((total: number, { value }) => {
      return total + value
    }, 0)
    return totalPayment
  }

  async findAll({
    user_id,
    month,
    year,
  }: IListPaymentsDTO): Promise<Payment[]> {
    const payments = await this.ormRepository.find({
      where: { user_id, month, year },
      relations: ['client'],
    })
    return payments
  }

  async delete(payment_id: string): Promise<void> {
    this.ormRepository.delete(payment_id)
  }

  async create(data: ICreatePaymentDTO): Promise<Payment> {
    const payment = this.ormRepository.create(data)

    await this.save(payment)

    return payment
  }

  async save(payment: Payment): Promise<Payment> {
    return this.ormRepository.save(payment)
  }
}
