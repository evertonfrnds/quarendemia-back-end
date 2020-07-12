import { container } from 'tsyringe'

import '@modules/users/providers'
import './providers'

import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository'
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository'

<<<<<<< HEAD
import IClientsRepository from '@modules/clients/repositories/IClientsRepository'
import ClientsRepository from '@modules/clients/infra/typeorm/repositories/ClientsRepository'

import IPlansRepository from '@modules/plans/repositories/IPlansRepository'
import PlansRepository from '@modules/plans/infra/typeorm/repositories/PlansRepository'

=======
import IPlansRepository from '@modules/plans/repositories/IPlansRepository'
import PlansRepository from '@modules/plans/infra/typeorm/repositories/PlansRepository'

import IClientRepository from '@modules/clients/repositories/IClientRepository'
import ClientRepository from '@modules/clients/infra/typeorm/repositories/ClientRepository'

>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
)

<<<<<<< HEAD
container.registerSingleton<IClientsRepository>(
  'ClientsRepository',
  ClientsRepository,
)

=======
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175
container.registerSingleton<IPlansRepository>(
  'PlansRepository',
  PlansRepository,
)
<<<<<<< HEAD
=======

container.registerSingleton<IClientRepository>(
  'ClientRepository',
  ClientRepository,
)
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175
