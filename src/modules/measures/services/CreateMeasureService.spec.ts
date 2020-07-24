<<<<<<< HEAD
import AppError from '@shared/errors/AppError'

import FakeMeasuresRepository from '../repositories/fakes/FakeMeasuresRepository'

import CreateMeasureService from './CreateMeasureService'

let fakeMeasuresRepository: FakeMeasuresRepository

=======
import FakeMeasuresRepository from '../repositories/fakes/FakeMeasuresRepository'
import CreateMeasureService from './CreateMeasureService'

let fakeMeasuresRepository: FakeMeasuresRepository
>>>>>>> 546c9a2a9198cc3fd3cff4df67718a8b8a484e6c
let createMeasure: CreateMeasureService

describe('CreateMeasure', () => {
  beforeEach(() => {
    fakeMeasuresRepository = new FakeMeasuresRepository()

    createMeasure = new CreateMeasureService(fakeMeasuresRepository)
  })

  it('should be able to create a new measure', async () => {
    const measure = await createMeasure.execute({
      client_id: 'valid-client-id',
      height: 100,
      weight: 100,
      neck: 100,
      abdomen: 100,
      arm_left: 100,
      arm_right: 100,
      bust: 100,
      calf_left: 100,
      calf_right: 100,
      forearm_left: 100,
      forearm_right: 100,
      hip: 100,
      thigh_left: 100,
      thigh_right: 100,
      torax_bottom: 100,
      torax_top: 100,
      waist: 100,
    })

    expect(measure).toHaveProperty('id')
  })
})
