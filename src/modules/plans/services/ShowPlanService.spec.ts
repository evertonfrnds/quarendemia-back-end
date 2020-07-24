import AppError from '@shared/errors/AppError'

import FakePlansRepository from '../repositories/fakes/FakePlansRepository'
import ShowPlanService from './ShowPlanService'

let fakePlansRepository: FakePlansRepository
let showPlan: ShowPlanService

describe('ShowPlan', () => {
  beforeEach(() => {
    fakePlansRepository = new FakePlansRepository()

    showPlan = new ShowPlanService(fakePlansRepository)
  })

  it('should be able to show plan', async () => {
    const plan = await fakePlansRepository.create({
      user_id: 'valid-id-user',
      name: 'Natação',
      description: 'Natação legal',
      value: 50,
    })

    const getPlan = await showPlan.execute({
      id: plan.id,
    })

    expect(getPlan.user_id).toBe('valid-id-user')
    expect(getPlan.name).toBe('Natação')
  })

  it('should not be able to show plan from non-existing plan', async () => {
    await expect(
      showPlan.execute({
        id: 'non-existing-plan',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
