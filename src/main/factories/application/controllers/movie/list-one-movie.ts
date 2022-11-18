import { makeListOneMovie } from '@/main/factories/domain/use-cases'
import { ListOneMovieController, Controller } from '@/application/controllers'

export const makeListOneMovieController = (): Controller => {
  const controller = new ListOneMovieController(makeListOneMovie())
  return controller
}
