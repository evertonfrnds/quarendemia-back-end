import AppError from '@shared/errors/AppError'

import FakeMeasuresRepository from '../repositories/fakes/FakeMeasuresRepository'

import CreateMeasureService from './CreateMeasureService'

let fakeMeasuresRepository: FakeMeasuresRepository

let createMeasure: CreateMeasureService

describe('CreateMeasure', () => {
  beforeEach(() => {
    fakeMeasuresRepository = new FakeMeasuresRepository()
    fakeHashProvider = new FakeHashProvider()

    createMeasure = new CreateMeasureService(
      fakeMeasuresRepository,
      fakeHashProvider,
    )
  })

  it('should be able to create a new user', async () => {
    const user = await createMeasure.execute({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      password: '12345678',
    })

    expect(user).toHaveProperty('id')
  })

  it('should not be able to create a new user with existing email', async () => {
    await createMeasure.execute({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      password: '12345678',
    })

    await expect(
      createMeasure.execute({
        name: 'Joseph Monkey',
        email: 'josephmonkey@gmail.com',
        type: 'common',
        password: '12345678',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
