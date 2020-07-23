import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm'
import Client from '@modules/clients/infra/typeorm/entities/Client'
import User from '@modules/users/infra/typeorm/entities/User'

@Entity('payments')
class Payments {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  client_id: string

  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id' })
  client: Client

  @Column()
  user_id: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column('decimal')
  month: number

  @Column('decimal')
  year: number

  @Column('decimal')
  value: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Payments
