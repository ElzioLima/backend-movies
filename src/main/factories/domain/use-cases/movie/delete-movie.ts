import { setupDeleteMovie, DeleteMovie } from '@/domain/use-cases'
import { makePgMovieRepo } from '@/main/factories/infra/repos/postgres'

export const makeDeleteMovie = (): DeleteMovie => {
  return setupDeleteMovie(
    makePgMovieRepo()
  )
}
