import { PgMovieRepository } from '@/infra/repos/postgres'

export const makePgMovieRepo = (): PgMovieRepository => {
  return new PgMovieRepository()
}
