import AppError from '@shared/errors/AppError'

import FakeMeasuresRepository from '../repositories/fakes/FakeMeasuresRepository'
import UpdateMeasureService from './UpdateMeasureService'

let fakeMeasuresRepository: FakeMeasuresRepository
let updateMeasure: UpdateMeasureService

describe('UpdateMeasure', () => {
  beforeEach(() => {
    fakeMeasuresRepository = new FakeMeasuresRepository()
    updateMeasure = new UpdateMeasureService(fakeMeasuresRepository)
  })

  it('should be able to update a measure', async () => {
    const measure = await fakeMeasuresRepository.create({
      client_id: 'valid-measure-id',
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

    const updatedMeasure = await updateMeasure.execute({
      id: measure.id,
      client_id: 'another-valid-measure-id',
      height: 200,
      weight: 200,
      neck: 200,
      abdomen: 200,
      arm_left: 200,
      arm_right: 200,
      bust: 200,
      calf_left: 200,
      calf_right: 200,
      forearm_left: 200,
      forearm_right: 200,
      hip: 200,
      thigh_left: 200,
      thigh_right: 200,
      torax_bottom: 200,
      torax_top: 200,
      waist: 200,
    })

    expect(updatedMeasure.client_id).toBe('another-valid-measure-id')
    expect(updatedMeasure.height).toBe(200)
  })

  it('should not be able to update a non-existing measure', async () => {
    await expect(
      updateMeasure.execute({
        id: 'non-existing-measure',
        client_id: 'another-valid-measure-id',
        height: 200,
        weight: 200,
        neck: 200,
        abdomen: 200,
        arm_left: 200,
        arm_right: 200,
        bust: 200,
        calf_left: 200,
        calf_right: 200,
        forearm_left: 200,
        forearm_right: 200,
        hip: 200,
        thigh_left: 200,
        thigh_right: 200,
        torax_bottom: 200,
        torax_top: 200,
        waist: 200,
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
