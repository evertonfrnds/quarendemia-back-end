import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('plans')
<<<<<<< HEAD
class Plan {
=======
class Plans {
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
<<<<<<< HEAD
=======
  user_id: string

  @Column()
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175
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

<<<<<<< HEAD
export default Plan
=======
export default Plans
>>>>>>> e394a3756e34e91c1527e85b4e852c82e58fb175
