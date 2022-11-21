import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity({ name: 'movies' })
export class PgMovie {
  @PrimaryGeneratedColumn('uuid')
  id!: number

  @Column()
  name!: string

  @Column()
  year!: Date

  @Column()
  description!: string

  @Column()
  length!: number

  @Column()
  gender!: string

  @Column({ type: 'float', nullable: true })
  rating!: number

  @Column()
  watched!: string

  @Column()
  image!: string

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date

  @DeleteDateColumn({ name: "deleted_At", nullable: true })
  deletedAt?: Date
}
