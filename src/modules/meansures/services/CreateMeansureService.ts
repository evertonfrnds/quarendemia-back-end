import { injectable, inject } from 'tsyringe'
import IMeansuresRepository from '../repositories/IMeansuresRepository'
import Meansure from '../infra/typeorm/entities/Meansure'

interface IRequest {
  id: string
  id_client: string
  height: number
  weight: number
  neck: number
  torax_sup: number
  torax_inf: number
  bust: number
  waist: number
  abdomen: number
  qualdril: number
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
class CreateMeansureService {
  constructor(
    @inject('MeansuresRepository')
    private meansuresRepository: IMeansuresRepository, // eslint-disable-next-line prettier/prettier
  ) {}

  public async execute({
    id,
    id_client,
    height,
    weight,
    neck,
    torax_sup,
    torax_inf,
    bust,
    waist,
    abdomen,
    qualdril,
    thigh_left,
    thigh_right,
    calf_left,
    calf_right,
    arm_left,
    arm_right,
    forearm_left,
    forearm_right,
  }: IRequest): Promise<Meansure> {
    const meansures = await this.meansuresRepository.create({
      id,
      id_client,
      height,
      weight,
      neck,
      torax_sup,
      torax_inf,
      bust,
      waist,
      abdomen,
      qualdril,
      thigh_left,
      thigh_right,
      calf_left,
      calf_right,
      arm_left,
      arm_right,
      forearm_left,
      forearm_right,
    })

    return meansures
  }
}

export default CreateMeansureService
