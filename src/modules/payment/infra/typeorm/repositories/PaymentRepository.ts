import { getRepository, Repository } from 'typeorm'

import IPaymentRepository from '@modules/payment/repositories/IPaymentRepository'

import ICreatePaymentDTO from '@modules/payment/dtos/ICreatePaymentDTO'

import Payment from '../entities/Payment'

export default class PaymentRepository implements IPaymentRepository {
  private ormRepository: Repository<Payment>

  constructor() {
    this.ormRepository = getRepository(Payment)
  }

  async findAll(id: string): Promise<Payment[]> {
    const payments = await this.ormRepository.find({ where: { client_id: id } })
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
