import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { ListMovie } from '@/domain/use-cases'

type Model = undefined | Array<{ id: number, name: string, year: string, description: string, length: number, gender: string, rating: number, watched: string, image: string, createdAt: Date, updatedAt: Date, deletedAt: Date | undefined }>

export class ListMovieController extends Controller {
  constructor (private readonly createMovie: ListMovie) {
    super()
  }

  override async perform (): Promise<HttpResponse<Model>> {
    const movie = await this.createMovie()
    return ok(movie)
  }

  override buildValidators (): Validator[] {
    return []
  }
}
