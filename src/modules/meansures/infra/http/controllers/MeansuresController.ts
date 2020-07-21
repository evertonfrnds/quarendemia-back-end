import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import ListMeasuresService from '@modules/meansures/services/ListMeansuresService'
import ShowMeansuresService from '@modules/meansures/services/ShowMeansuresService'
import CreateMeansuresService from '@modules/meansures/services/CreateMeansuresService'
import UpdateMeansuresService from '@modules/meansures/services/UpdateMeansuresService'
import DeleteMeansuresService from '@modules/meansures/services/DeleteMeansuresService'

export default class MeansuresController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const listMeansures = container.resolve(ListMeasuresService)

    const meansures = await listMeansures.execute({ id })

    return response.json(meansures)
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const showMeansures = container.resolve(ShowMeansuresService)

    const meansures = await showMeansures.execute({ id })

    return response.json(meansures)
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const { name, description, value } = request.body
    const createMeansures = container.resolve(CreateMeansuresService)

    const meansure = await createMeansures.execute({
      id,
      name,
      description,
      value,
    })

    return response.json(classToClass(meansure))
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, description, value } = request.body
    const { id } = request.params

    const updateMeansures = container.resolve(UpdateMeansuresService)

    const meansure = await updateMeansures.execute({
      id,
      name,
      description,
      value,
    })

    return response.json(classToClass(meansure))
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const deleteMeansure = container.resolve(DeleteMeansuresService)

    await deleteMeansure.execute({
      meansure_id: id,
    })

    return response.status(204).send()
  }
}
