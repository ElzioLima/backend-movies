import { PgMovie } from '@/infra/repos/postgres/entities'
import { PgRepository } from '@/infra/repos/postgres/repository'
import {
  DBCreateMovie,
  DBListOneMovie,
  DBListMovie,
  DBUpdateMovie,
  DBDeleteMovie
} from '@/domain/contracts/repos'

export class PgMovieRepository extends PgRepository implements DBCreateMovie, DBListMovie, DBUpdateMovie, DBListOneMovie, DBDeleteMovie {
  async create ({ name, year, description, length, gender, rating, watched, image }: DBCreateMovie.Input): Promise<DBCreateMovie.Output> {
    const pgMovieRepo = this.getRepository(PgMovie)
    const pgMovie = await pgMovieRepo.save({ name, year, description, length, gender, rating, watched, image })
    if (pgMovie !== undefined) {
      return {
        id: pgMovie.id ?? undefined,
        name: pgMovie.name ?? undefined,
        year: pgMovie.year ?? undefined,
        description: pgMovie.description ?? undefined,
        length: pgMovie.length ?? undefined,
        gender: pgMovie.gender ?? undefined,
        rating: pgMovie.rating ?? undefined,
        watched: pgMovie.watched ?? undefined,
        image: pgMovie.image ?? undefined,
        createdAt: pgMovie.createdAt ?? undefined,
        updatedAt: pgMovie.updatedAt ?? undefined,
        deletedAt: pgMovie.deletedAt ?? undefined
      }
    }
  }

  async update ({ id, name, year, description, length, gender, rating, watched, image }: DBUpdateMovie.Input): Promise<DBUpdateMovie.Output> {
    const pgMovieRepo = this.getRepository(PgMovie)
    const pgMovieUpdated = await pgMovieRepo.update(id, { name, year, description, length, gender, rating, watched, image })
    if (pgMovieUpdated !== undefined) {
      const pgMovie = await pgMovieRepo.findOne(id)
      if (pgMovie !== undefined) {
        return {
          id: pgMovie.id ?? undefined,
          name: pgMovie.name ?? undefined,
          year: pgMovie.year ?? undefined,
          description: pgMovie.description ?? undefined,
          length: pgMovie.length ?? undefined,
          gender: pgMovie.gender ?? undefined,
          rating: pgMovie.rating ?? undefined,
          watched: pgMovie.watched ?? undefined,
          image: pgMovie.image ?? undefined,
          createdAt: pgMovie.createdAt ?? undefined,
          updatedAt: pgMovie.updatedAt ?? undefined,
          deletedAt: pgMovie.deletedAt ?? undefined
        }
      }
    }
  }

  async list (): Promise<DBListMovie.Output> {
    const pgMovieRepo = this.getRepository(PgMovie)
    const pgMovieList = pgMovieRepo.find()
    return (await pgMovieList).map(({ id, name, year, description, length, gender, rating, watched, image, createdAt, updatedAt, deletedAt }) => {
      return {
        id: id ?? undefined,
        name: name ?? undefined,
        year: year ?? undefined,
        description: description ?? undefined,
        length: length ?? undefined,
        gender: gender ?? undefined,
        rating: rating ?? undefined,
        watched: watched ?? undefined,
        image: image ?? undefined,
        createdAt: createdAt ?? undefined,
        updatedAt: updatedAt ?? undefined,
        deletedAt: deletedAt ?? undefined
      }
    })
  }

  async listOne ({ id }: DBListOneMovie.Input): Promise<DBListOneMovie.Output> {
    const pgMovieRepo = this.getRepository(PgMovie)
    const pgMovie = await pgMovieRepo.findOne(id)
    if (pgMovie !== undefined) {
      return {
        id: pgMovie.id ?? undefined,
          name: pgMovie.name ?? undefined,
          year: pgMovie.year ?? undefined,
          description: pgMovie.description ?? undefined,
          length: pgMovie.length ?? undefined,
          gender: pgMovie.gender ?? undefined,
          rating: pgMovie.rating ?? undefined,
          watched: pgMovie.watched ?? undefined,
          image: pgMovie.image ?? undefined,
          createdAt: pgMovie.createdAt ?? undefined,
          updatedAt: pgMovie.updatedAt ?? undefined,
          deletedAt: pgMovie.deletedAt ?? undefined
      }
    }
  }

  async delete ({ id }: DBListOneMovie.Input): Promise<DBListOneMovie.Output> {
    const pgMovieRepo = this.getRepository(PgMovie)
    const pgMovie = await pgMovieRepo.findOne(id)
    if (pgMovie !== undefined) {
      const pgMovieDeleted = await pgMovieRepo.softDelete(id)
      return {
        id: pgMovie.id ?? undefined,
          name: pgMovie.name ?? undefined,
          year: pgMovie.year ?? undefined,
          description: pgMovie.description ?? undefined,
          length: pgMovie.length ?? undefined,
          gender: pgMovie.gender ?? undefined,
          rating: pgMovie.rating ?? undefined,
          watched: pgMovie.watched ?? undefined,
          image: pgMovie.image ?? undefined,
          createdAt: pgMovie.createdAt ?? undefined,
          updatedAt: pgMovie.updatedAt ?? undefined,
          deletedAt: pgMovie.deletedAt ?? undefined
      }
    }
  }
}
