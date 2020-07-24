import { uuid } from 'uuidv4'

import IMeasuresRepository from '@modules/measures/repositories/IMeasuresRepository'

import ICreateMeasuresDTO from '@modules/measures/dtos/ICreateMeasureDTO'

import Measure from '../../infra/typeorm/entities/Measure'

class FakeMeasuresRepository implements IMeasuresRepository {
  private measures: Measure[] = []

  public async findAllByClientId(client_id: string): Promise<Measure[]> {
    const measures = this.measures.filter(
      measure => measure.client_id === client_id,
    )
    return measures
  }

  public async findById(id: string): Promise<Measure | undefined> {
    const findMeasure = this.measures.find(measure => measure.id === id)

    return findMeasure
  }

  public async create(measureData: ICreateMeasuresDTO): Promise<Measure> {
    const measure = new Measure()

    Object.assign(measure, { id: uuid() }, measureData)

    this.measures.push(measure)

    return measure
  }

  public async save(measure: Measure): Promise<Measure> {
    const findIndex = this.measures.findIndex(
      findMeasure => findMeasure.id === measure.id,
    )

    this.measures[findIndex] = measure

    return measure
  }
}

export default FakeMeasuresRepository
