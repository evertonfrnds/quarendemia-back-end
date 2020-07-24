import FakePaymentsRepository from '../repositories/fakes/FakePaymentsRepository'
import GetTotalPaymentService from './GetTotalPaymentService'

let fakePaymentsRepository: FakePaymentsRepository
let getTotalPayment: GetTotalPaymentService

describe('GetTotalPayment', () => {
  beforeEach(() => {
    fakePaymentsRepository = new FakePaymentsRepository()

    getTotalPayment = new GetTotalPaymentService(fakePaymentsRepository)
  })

  it('should be able to get total of month payment', async () => {
    const user_id = 'valid-user-id'
    const month = 7
    const year = 2020

    await fakePaymentsRepository.create({
      user_id,
      client_id: 'valid-client-id',
      month,
      year,
      value: 40,
    })

    await fakePaymentsRepository.create({
      user_id,
      client_id: 'another-valid-client-id',
      month,
      year,
      value: 60,
    })

    const total = await getTotalPayment.execute({ user_id, month, year })

    expect(total).toBe(100)
  })
})
