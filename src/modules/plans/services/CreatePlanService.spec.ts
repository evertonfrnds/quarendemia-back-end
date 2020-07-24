import FakePlansRepository from '../repositories/fakes/FakePlansRepository'
import CreatePlanService from './CreatePlanService'

let fakePlansRepository: FakePlansRepository
let createPlan: CreatePlanService

describe('CreatePlan', () => {
  beforeEach(() => {
    fakePlansRepository = new FakePlansRepository()

    createPlan = new CreatePlanService(fakePlansRepository)
  })

  it('should be able to create a new plan', async () => {
    const plan = await createPlan.execute({
      user_id: 'valid-id-user',
      name: 'Academia',
      description: 'Academia legal',
      value: 50,
    })

    expect(plan).toHaveProperty('id')
  })
})
