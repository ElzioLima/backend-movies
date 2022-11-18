import { makeUpdateMovie } from '@/main/factories/domain/use-cases'
import { UpdateMovieController, Controller } from '@/application/controllers'

export const makeUpdateMovieController = (): Controller => {
  const controller = new UpdateMovieController(makeUpdateMovie())
  return controller
}
