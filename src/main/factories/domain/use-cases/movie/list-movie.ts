import { setupListMovie, ListMovie } from '@/domain/use-cases'
import { makePgMovieRepo } from '@/main/factories/infra/repos/postgres'

export const makeListMovie = (): ListMovie => {
  return setupListMovie(
    makePgMovieRepo()
  )
}
