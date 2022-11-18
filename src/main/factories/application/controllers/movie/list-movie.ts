import { makeListMovie } from '@/main/factories/domain/use-cases'
import { ListMovieController, Controller } from '@/application/controllers'

export const makeListMovieController = (): Controller => {
  const controller = new ListMovieController(makeListMovie())
  return controller
}
