import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('clients')
<<<<<<< HEAD
class User {
=======
class Client {
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
<<<<<<< HEAD
  name: string

  @Column()
  telefone: string
=======
  user_id: string

  @Column()
  plan_id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  isActive: boolean
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

<<<<<<< HEAD
export default User
=======
export default Client
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175
