import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider'
import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import FakeUserTokensRepository from '../repositories/fakes/FakeUserTokensRepository'

import SendForgotPasswordEmailService from './SendForgotPasswordEmailService'

let fakeUsersRepository: FakeUsersRepository
let fakeMailProvider: FakeMailProvider
let fakeUserTokensRepository: FakeUserTokensRepository
let sendForgotPasswordEmail: SendForgotPasswordEmailService

describe('SendForgotPasswordEmail', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    fakeMailProvider = new FakeMailProvider()
    fakeUserTokensRepository = new FakeUserTokensRepository()

    sendForgotPasswordEmail = new SendForgotPasswordEmailService(
      fakeUsersRepository,
      fakeMailProvider,
      fakeUserTokensRepository,
    )
  })

  it('should be able to recover password using email', async () => {
    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail')

    await fakeUsersRepository.create({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      password: '12345678',
    })

    await sendForgotPasswordEmail.execute({
      email: 'josephmonkey@gmail.com',
    })

    expect(sendMail).toHaveBeenCalled()
  })

  it('should not be able to recover a non-existing user', async () => {
    await expect(
      sendForgotPasswordEmail.execute({
        email: 'josephmonkey@gmail.com',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should generate a forgot password token', async () => {
    const generateToken = jest.spyOn(fakeUserTokensRepository, 'generate')

    const user = await fakeUsersRepository.create({
      name: 'Joseph Monkey',
      email: 'josephmonkey@gmail.com',
      type: 'common',
      password: '12345678',
    })

    await sendForgotPasswordEmail.execute({
      email: 'josephmonkey@gmail.com',
    })

    expect(generateToken).toHaveBeenCalledWith(user.id)
  })
})
