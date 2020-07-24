import FakePaymentsRepository from '../repositories/fakes/FakePaymentsRepository'
import ListPaymentsService from './ListPaymentsService'

let fakePaymentsRepository: FakePaymentsRepository
let listPayments: ListPaymentsService

describe('ListPayment', () => {
  beforeEach(() => {
    fakePaymentsRepository = new FakePaymentsRepository()

    listPayments = new ListPaymentsService(fakePaymentsRepository)
  })

  it('should be able to list all payments', async () => {
    const user_id = 'valid-user-id'
    const month = 7
    const year = 2020

    const payment1 = await fakePaymentsRepository.create({
      user_id,
      client_id: 'valid-client-id',
      month,
      year,
      value: 40,
    })

    const payment2 = await fakePaymentsRepository.create({
      user_id,
      client_id: 'another-valid-client-id',
      month,
      year,
      value: 40,
    })

    const payments = await listPayments.execute({ user_id, month, year })

    expect(payments).toEqual([payment1, payment2])
  })

  it('should only list payments of selected user', async () => {
    const user_id = 'valid-user-id'
    const month = 7
    const year = 2020

    const payment1 = await fakePaymentsRepository.create({
      user_id,
      client_id: 'valid-client-id',
      month,
      year,
      value: 40,
    })

    const payment2 = await fakePaymentsRepository.create({
      user_id,
      client_id: 'another-valid-client-id',
      month,
      year,
      value: 40,
    })

    await fakePaymentsRepository.create({
      user_id: 'another-valid-user-id',
      client_id: 'another-valid-client-id',
      month,
      year,
      value: 40,
    })

    const payments = await listPayments.execute({ user_id, month, year })

    expect(payments).toEqual([payment1, payment2])
  })
})
