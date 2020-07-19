import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('payments')
class Payments {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  client_id: string

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
