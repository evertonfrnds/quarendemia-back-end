import AppError from '@shared/errors/AppError'

import FakeMeasuresRepository from '../repositories/fakes/FakeMeasuresRepository'
import ShowMeasureService from './ShowMeasureService'

let fakeMeasuresRepository: FakeMeasuresRepository
let showMeasure: ShowMeasureService

describe('ShowMeasure', () => {
  beforeEach(() => {
    fakeMeasuresRepository = new FakeMeasuresRepository()

    showMeasure = new ShowMeasureService(fakeMeasuresRepository)
  })

  it('should be able to show measure', async () => {
    const measure = await fakeMeasuresRepository.create({
      client_id: 'valid-measure-id',
      height: 1000,
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

    const getMeasure = await showMeasure.execute({
      id: measure.id,
    })

    expect(getMeasure.client_id).toBe('valid-measure-id')
    expect(getMeasure.height).toBe(1000)
  })

  it('should not be able to show measure from non-existing measure', async () => {
    await expect(
      showMeasure.execute({
        id: 'non-existing-measure',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
