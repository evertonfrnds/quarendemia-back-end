import FakeMeasuresRepository from '../repositories/fakes/FakeMeasuresRepository'
import ListMeasuresService from './ListMeasuresService'

let fakeMeasuresRepository: FakeMeasuresRepository
let listMeasures: ListMeasuresService

describe('ListMeasure', () => {
  beforeEach(() => {
    fakeMeasuresRepository = new FakeMeasuresRepository()

    listMeasures = new ListMeasuresService(fakeMeasuresRepository)
  })

  it('should be able to list all measures', async () => {
    const measure1 = await fakeMeasuresRepository.create({
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

    const measure2 = await fakeMeasuresRepository.create({
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

    const measures = await listMeasures.execute({
      client_id: 'valid-measure-id',
    })

    expect(measures).toEqual([measure1, measure2])
  })

  it('should only list measures of selected client', async () => {
    const measure1 = await fakeMeasuresRepository.create({
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

    const measure2 = await fakeMeasuresRepository.create({
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

    await fakeMeasuresRepository.create({
      client_id: 'another-valid-measure-id',
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

    const measures = await listMeasures.execute({
      client_id: 'valid-measure-id',
    })

    expect(measures).toEqual([measure1, measure2])
  })
})
