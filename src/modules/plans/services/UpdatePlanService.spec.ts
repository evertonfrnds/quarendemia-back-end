import AppError from '@shared/errors/AppError'

import FakePlansRepository from '../repositories/fakes/FakePlansRepository'
import UpdatePlanService from './UpdatePlanService'

let fakePlansRepository: FakePlansRepository
let updatePlan: UpdatePlanService

describe('UpdatePlan', () => {
  beforeEach(() => {
    fakePlansRepository = new FakePlansRepository()
    updatePlan = new UpdatePlanService(fakePlansRepository)
  })

  it('should be able to update a plan', async () => {
    const plan = await fakePlansRepository.create({
      user_id: 'valid-id-user',
      name: 'Natação',
      description: 'Natação legal',
      value: 50,
    })

    const updatedPlan = await updatePlan.execute({
      id: plan.id,
      name: 'Judô',
      description: 'Judô legal',
      value: 50,
    })

    expect(updatedPlan.name).toBe('Judô')
    expect(updatedPlan.description).toBe('Judô legal')
  })

  it('should not be able to update a non-existing plan', async () => {
    await expect(
      updatePlan.execute({
        id: 'non-existing-planid',
        name: 'Natação',
        description: 'Natação legal',
        value: 50,
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
