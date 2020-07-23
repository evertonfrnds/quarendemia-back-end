import { injectable, inject } from 'tsyringe'
import IMeasuresRepository from '../repositories/IMeasuresRepository'
import Measure from '../infra/typeorm/entities/Measure'

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
class CreateMeasureService {
  constructor(
    @inject('MeasuresRepository')
    private measuresRepository: IMeasuresRepository, // eslint-disable-next-line prettier/prettier
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
    const measures = await this.measuresRepository.create({
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
    })

    return measures
  }
}

export default CreateMeasureService
