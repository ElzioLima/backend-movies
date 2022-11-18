import { setupListOneMovie, ListOneMovie } from '@/domain/use-cases'
import { makePgMovieRepo } from '@/main/factories/infra/repos/postgres'

export const makeListOneMovie = (): ListOneMovie => {
  return setupListOneMovie(
    makePgMovieRepo()
  )
}
