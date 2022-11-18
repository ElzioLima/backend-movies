import { makeDeleteMovie } from '@/main/factories/domain/use-cases'
import { DeleteMovieController, Controller } from '@/application/controllers'

export const makeDeleteMovieController = (): Controller => {
  const controller = new DeleteMovieController(makeDeleteMovie())
  return controller
}
