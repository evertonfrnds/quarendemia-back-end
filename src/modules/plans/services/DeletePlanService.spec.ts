import AppError from '@shared/errors/AppError'

import FakePlansRepository from '../repositories/fakes/FakePlansRepository'
import DeletePlanService from './DeletePlanService'

let fakePlansRepository: FakePlansRepository
let deletePlan: DeletePlanService

describe('DeletePlan', () => {
  beforeEach(() => {
    fakePlansRepository = new FakePlansRepository()

    deletePlan = new DeletePlanService(fakePlansRepository)
  })

  it('should be able to delete a existing plan', async () => {
    const plan = await fakePlansRepository.create({
      user_id: 'valid-id-user',
      name: 'Academia',
      description: 'Academia legal',
      value: 50,
    })

    await deletePlan.execute({
      id: plan.id,
    })

    const payments = await fakePlansRepository.findAllByUserId('valid-id-user')

    expect(payments).toHaveLength(0)
  })

  it('should not be able to delete a non-existing plan', async () => {
    await expect(
      deletePlan.execute({
        id: 'non-existing-plan',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
