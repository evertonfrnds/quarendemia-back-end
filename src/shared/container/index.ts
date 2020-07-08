import { container } from 'tsyringe'

import '@modules/users/providers'
import './providers'

import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository'
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository'

import IClientsRepository from '@modules/clients/repositories/IClientsRepository'
import ClientsRepository from '@modules/clients/infra/typeorm/repositories/ClientsRepository'

import IPlansRepository from '@modules/plans/repositories/IPlansRepository'
import PlansRepository from '@modules/plans/infra/typeorm/repositories/PlansRepository'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
)

container.registerSingleton<IClientsRepository>(
  'ClientsRepository',
  ClientsRepository,
)

container.registerSingleton<IPlansRepository>(
  'PlansRepository',
  PlansRepository,
)
