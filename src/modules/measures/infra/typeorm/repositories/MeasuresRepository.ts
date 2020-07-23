import { getRepository, Repository } from 'typeorm'

import IMeasuresRepository from '@modules/measures/repositories/IMeasuresRepository'

import ICreateMeasureDTO from '@modules/measures/dtos/ICreateMeasureDTO'

import Measure from '../entities/Measure'

class MeasuresRepository implements IMeasuresRepository {
  private ormRepository: Repository<Measure>

  constructor() {
    this.ormRepository = getRepository(Measure)
  }

  public async findAllByClientId(client_id: string): Promise<Measure[]> {
    const measure = await this.ormRepository.find({ where: { client_id } })
    return measure
  }

  public async findById(id: string): Promise<Measure | undefined> {
    const measure = await this.ormRepository.findOne(id, {
      select: ['id', 'client_id'],
    })

    return measure
  }

  public async delete(measure_id: string): Promise<void> {
    this.ormRepository.delete(measure_id)
  }

  public async create(measureData: ICreateMeasureDTO): Promise<Measure> {
    const measure = this.ormRepository.create(measureData)

    await this.ormRepository.save(measure)

    return measure
  }

  public async save(measure: Measure): Promise<Measure> {
    return this.ormRepository.save(measure)
  }
}

export default MeasuresRepository
