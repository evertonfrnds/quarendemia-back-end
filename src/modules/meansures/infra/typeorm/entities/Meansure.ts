import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('meansures')
class Meansure {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  client_id: string

  @Column()
  height: number

  @Column()
  weight: number

  @Column('decimal')
  neck: number

  @Column('decimal')
  torax_sup: number

  @Column('decimal')
  torax_inf: number

  @Column('decimal')
  bust: number

  @Column('decimal')
  waist: number

  @Column('decimal')
  abdomen: number

  @Column('decimal')
  quadril: number

  @Column('decimal')
  thigh_left: number

  @Column('decimal')
  thigh_right: number

  @Column('decimal')
  calf_left: number

  @Column('decimal')
  calf_right: number

  @Column('decimal')
  arm_left: number

  @Column('decimal')
  arm_right: number

  @Column('decimal')
  forearm_left: number

  @Column('decimal')
  forearm_right: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Meansure
