import AppError from '@shared/errors/AppError'

import FakeMeasuresRepository from '../repositories/fakes/FakeMeasuresRepository'
import DeleteMeasureService from './DeleteMeasureService'

let fakeMeasuresRepository: FakeMeasuresRepository
let deleteMeasure: DeleteMeasureService

describe('DeleteMeasure', () => {
  beforeEach(() => {
    fakeMeasuresRepository = new FakeMeasuresRepository()

    deleteMeasure = new DeleteMeasureService(fakeMeasuresRepository)
  })

  it('should be able to delete a existing measure', async () => {
    const measure = await fakeMeasuresRepository.create({
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

    await deleteMeasure.execute({
      id: measure.id,
    })

    const measures = await fakeMeasuresRepository.findAllByClientId(
      'valid-client-id',
    )

    expect(measures).toHaveLength(0)
  })

  it('should not be able to delete a non-existing measure', async () => {
    await expect(
      deleteMeasure.execute({
        id: 'non-existing-measure',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
