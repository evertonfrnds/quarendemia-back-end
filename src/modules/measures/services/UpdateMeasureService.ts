import AppError from '@shared/errors/AppError'

import Measure from '@modules/measures/infra/typeorm/entities/Measure'
import { injectable, inject } from 'tsyringe'
import IMeasuresRepository from '../repositories/IMeasuresRepository'

interface IRequest {
  id: string
  client_id: string
  height: number
  weight: number
  neck: number
  torax_top: number
  torax_bottom: number
  bust: number
  waist: number
  abdomen: number
  hip: number
  thigh_left: number
  thigh_right: number
  calf_left: number
  calf_right: number
  arm_left: number
  arm_right: number
  forearm_left: number
  forearm_right: number
}

@injectable()
class UpdateMeasureService {
  constructor(
    @inject('MeasuresRepository')
    private measuresRepository: IMeasuresRepository,
  ) {}

  public async execute({
    id,
    client_id,
    height,
    weight,
    neck,
    torax_top,
    torax_bottom,
    bust,
    waist,
    abdomen,
    hip,
    thigh_left,
    thigh_right,
    calf_left,
    calf_right,
    arm_left,
    arm_right,
    forearm_left,
    forearm_right,
  }: IRequest): Promise<Measure> {
    const measure = await this.measuresRepository.findById(id)

    if (!measure) {
      throw new AppError('Medida não encontrada.')
    }

    measure.client_id = client_id
    measure.height = height
    measure.weight = weight
    measure.neck = neck
    measure.torax_top = torax_top
    measure.torax_bottom = torax_bottom
    measure.bust = bust
    measure.waist = waist
    measure.abdomen = abdomen
    measure.hip = hip
    measure.thigh_left = thigh_left
    measure.thigh_right = thigh_right
    measure.calf_left = calf_left
    measure.calf_right = calf_right
    measure.arm_left = arm_left
    measure.arm_right = arm_right
    measure.forearm_left = forearm_left
    measure.forearm_right = forearm_right

    await this.measuresRepository.save(measure)

    return measure
  }
}

export default UpdateMeasureService
