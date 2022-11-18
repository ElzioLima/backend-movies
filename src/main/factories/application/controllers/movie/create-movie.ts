import { makeCreateMovie } from '@/main/factories/domain/use-cases'
import { CreateMovieController, Controller } from '@/application/controllers'

export const makeCreateMovieController = (): Controller => {
  const controller = new CreateMovieController(makeCreateMovie())
  return controller
}
