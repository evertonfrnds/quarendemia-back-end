import User from '../infra/typeorm/entities/User'
import ICreateUserDTO from '../dtos/ICreateUserDTO'
import ISignUpDTO from '../dtos/ISignUpDTO'

export default interface IUsersRepository {
  // findAll
  findById(id: string): Promise<User | undefined>
  findByEmail(email: string): Promise<User | undefined>
  countAdms(user_id: string): Promise<number>
  signUp(data: ISignUpDTO): Promise<User>
  create(data: ICreateUserDTO): Promise<User>
  save(user: User): Promise<User>
}
