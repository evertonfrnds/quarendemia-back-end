import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import Client from '@modules/clients/infra/typeorm/entities/Client'

@Entity('measures')
class Measure {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  client_id: string

  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id' })
  client: Client

  @Column()
  height: number

  @Column()
  weight: number

  @Column('decimal')
  neck: number

  @Column('decimal')
  torax_top: number

  @Column('decimal')
  torax_bottom: number

  @Column('decimal')
  bust: number

  @Column('decimal')
  waist: number

  @Column('decimal')
  abdomen: number

  @Column('decimal')
  hip: number

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

export default Measure
