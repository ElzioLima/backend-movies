import { setupCreateMovie, CreateMovie } from '@/domain/use-cases'
import { makePgMovieRepo } from '@/main/factories/infra/repos/postgres'

export const makeCreateMovie = (): CreateMovie => {
  return setupCreateMovie(
    makePgMovieRepo()
  )
}
