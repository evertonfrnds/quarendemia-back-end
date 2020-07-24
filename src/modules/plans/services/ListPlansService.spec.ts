import FakePlansRepository from '../repositories/fakes/FakePlansRepository'
import ListPlansService from './ListPlansService'

let fakePlansRepository: FakePlansRepository
let listPlans: ListPlansService

describe('ListPlan', () => {
  beforeEach(() => {
    fakePlansRepository = new FakePlansRepository()

    listPlans = new ListPlansService(fakePlansRepository)
  })

  it('should be able to list all plans', async () => {
    const plan1 = await fakePlansRepository.create({
      user_id: 'valid-id-user',
      name: 'Academia',
      description: 'Academia legal',
      value: 50,
    })

    const plan2 = await fakePlansRepository.create({
      user_id: 'valid-id-user',
      name: 'Natação',
      description: 'Natação legal',
      value: 50,
    })

    const plans = await listPlans.execute({ user_id: 'valid-id-user' })

    expect(plans).toEqual([plan1, plan2])
  })

  it('should only list plans of selected user', async () => {
    const plan1 = await fakePlansRepository.create({
      user_id: 'valid-id-user',
      name: 'Academia',
      description: 'Academia legal',
      value: 50,
    })

    const plan2 = await fakePlansRepository.create({
      user_id: 'valid-id-user',
      name: 'Natação',
      description: 'Natação legal',
      value: 50,
    })

    await fakePlansRepository.create({
      user_id: 'another-valid-id-user',
      name: 'Natação',
      description: 'Natação legal',
      value: 50,
    })

    const plans = await listPlans.execute({ user_id: 'valid-id-user' })

    expect(plans).toEqual([plan1, plan2])
  })
})
