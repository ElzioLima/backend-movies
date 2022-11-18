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

  @Column()
  rating!: number

  @Column()
  watched!: string

  @Column()
  image!: string

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date
}
