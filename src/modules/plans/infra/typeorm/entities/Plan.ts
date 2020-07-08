import User from '@modules/users/infra/typeorm/entities/User'

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinColumn,
} from 'typeorm'

@Entity('plans')
class Plans {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToMany(() => User)
  @JoinColumn({ name: 'id_user' })
  user: User

  @Column()
  name: string

  @Column()
  description: string

  @Column('decimal')
  value: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Plans
