import { getRepository, Repository } from 'typeorm'

import IMeansuresRepository from '@modules/meansures/repositories/IMeansuresRepository'

import ICreateMeansureDTO from '@modules/meansures/dtos/ICreateMeansureDTO'

import Meansure from '../entities/Meansure'

class MeansuresRepository implements IMeansuresRepository {
  private ormRepository: Repository<Meansure>

  constructor() {
    this.ormRepository = getRepository(Meansure)
  }

  public async findAllById(id: string): Promise<Meansure[]> {
    const meansure = await this.ormRepository.find({ where: { user_id: id } })
    return meansure
  }

  public async findById(id: string): Promise<Meansure | undefined> {
    const meansure = await this.ormRepository.findOne(id, {
      select: ['id', 'id_client'],
    })

    return meansure
  }

  public async delete(meansure_id: string): Promise<void> {
    this.ormRepository.delete(meansure_id)
  }

  public async create(meansureData: ICreateMeansureDTO): Promise<Meansure> {
    const meansure = this.ormRepository.create(meansureData)

    await this.ormRepository.save(meansure)

    return meansure
  }

  public async save(meansure: Meansure): Promise<Meansure> {
    return this.ormRepository.save(meansure)
  }
}

export default MeansuresRepository
