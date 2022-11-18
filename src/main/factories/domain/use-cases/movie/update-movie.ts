import { setupUpdateMovie, UpdateMovie } from '@/domain/use-cases'
import { makePgMovieRepo } from '@/main/factories/infra/repos/postgres'

export const makeUpdateMovie = (): UpdateMovie => {
  return setupUpdateMovie(
    makePgMovieRepo()
  )
}
