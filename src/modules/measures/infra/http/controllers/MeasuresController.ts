import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import ListMeasuresService from '@modules/measures/services/ListMeasuresService'
import ShowMeasureService from '@modules/measures/services/ShowMeasureService'
import CreateMeasureService from '@modules/measures/services/CreateMeasureService'
import UpdateMeasureService from '@modules/measures/services/UpdateMeasureService'
import DeleteMeasureService from '@modules/measures/services/DeleteMeasureService'

export default class MeasuresController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const listMeasures = container.resolve(ListMeasuresService)

    const measures = await listMeasures.execute({ id })

    return response.json(measures)
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const showMeasure = container.resolve(ShowMeasureService)

    const measures = await showMeasure.execute({ id })

    return response.json(measures)
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { client_id } = request.user
    const {
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
    } = request.body
    const createMeasure = container.resolve(CreateMeasureService)

    const measure = await createMeasure.execute({
      id,
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

    return response.json(classToClass(measure))
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {
      client_id,
      height,
      weight,
      neck,
      torax_top,
      torax_bottom,
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
    } = request.body
    const { client_id } = request.params

    const updateMeasure = container.resolve(UpdateMeasureService)

    const measure = await updateMeasure.execute({
      client_id,
      height,
      weight,
      neck,
      torax_top,
      torax_bottom,
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

    return response.json(classToClass(measure))
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { client_id } = request.params

    const deleteMeasure = container.resolve(DeleteMeasureService)

    await deleteMeasure.execute({})

    return response.status(204).send()
  }
}
