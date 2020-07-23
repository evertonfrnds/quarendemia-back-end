import { container } from 'tsyringe'

import '@modules/users/providers'
import './providers'

import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository'
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository'

import IPlansRepository from '@modules/plans/repositories/IPlansRepository'
import PlansRepository from '@modules/plans/infra/typeorm/repositories/PlansRepository'

import IClientRepository from '@modules/clients/repositories/IClientRepository'
import ClientRepository from '@modules/clients/infra/typeorm/repositories/ClientRepository'

import IPaymentRepository from '@modules/payment/repositories/IPaymentRepository'
import PaymentRepository from '@modules/payment/infra/typeorm/repositories/PaymentRepository'

import IMeasuresRepository from '@modules/measures/infra/typeorm/repositories/node_modules/@modules/measures/repositories/IMeasuresRepository'
import MeasuresRepository from '@modules/measures/infra/typeorm/repositories/MeasuresRepository'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
)

container.registerSingleton<IPlansRepository>(
  'PlansRepository',
  PlansRepository,
)

container.registerSingleton<IClientRepository>(
  'ClientRepository',
  ClientRepository,
)

container.registerSingleton<IPaymentRepository>(
  'PaymentRepository',
  PaymentRepository,
)
container.registerSingleton<IMeasuresRepository>(
  'MeasuresRepository',
  MeasuresRepository,
)
