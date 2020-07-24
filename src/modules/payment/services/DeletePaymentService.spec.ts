import AppError from '@shared/errors/AppError'

import FakePaymentsRepository from '../repositories/fakes/FakePaymentsRepository'
import DeletePaymentService from './DeletePaymentService'

let fakePaymentsRepository: FakePaymentsRepository
let deletePayment: DeletePaymentService

describe('DeletePayment', () => {
  beforeEach(() => {
    fakePaymentsRepository = new FakePaymentsRepository()

    deletePayment = new DeletePaymentService(fakePaymentsRepository)
  })

  it('should be able to delete a existing payment', async () => {
    const user_id = 'valid-user-id'
    const month = 7
    const year = 2020

    const payment = await fakePaymentsRepository.create({
      user_id,
      client_id: 'valid-client-id',
      month,
      year,
      value: 40,
    })

    await deletePayment.execute({
      id: payment.id,
    })

    const payments = await fakePaymentsRepository.findAll({
      user_id,
      month,
      year,
    })

    expect(payments).toHaveLength(0)
  })

  it('should not be able to delete a non-existing payment', async () => {
    await expect(
      deletePayment.execute({
        id: 'non-existing-payment',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
