import { container } from 'tsyringe'

import '@modules/users/providers'
import './providers'

import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository'
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository'

import IPlansRepository from '@modules/plans/repositories/IPlansRepository'
import PlansRepository from '@modules/plans/infra/typeorm/repositories/PlansRepository'

import IClientsRepository from '@modules/clients/repositories/IClientsRepository'
import ClientsRepository from '@modules/clients/infra/typeorm/repositories/ClientsRepository'

import IDueClientsRepository from '@modules/clients/repositories/IDueClientsRepository'
import DueClientsRepository from '@modules/clients/infra/typeorm/repositories/DueClientsRepository'

import IPaymentsRepository from '@modules/payment/repositories/IPaymentsRepository'
import PaymentsRepository from '@modules/payment/infra/typeorm/repositories/PaymentsRepository'

import IMeasuresRepository from '@modules/measures/repositories/IMeasuresRepository'
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

container.registerSingleton<IClientsRepository>(
  'ClientsRepository',
  ClientsRepository,
)

container.registerSingleton<IPaymentsRepository>(
  'PaymentsRepository',
  PaymentsRepository,
)

container.registerSingleton<IMeasuresRepository>(
  'MeasuresRepository',
  MeasuresRepository,
)

container.registerSingleton<IDueClientsRepository>(
  'DueClientsRepository',
  DueClientsRepository,
)
