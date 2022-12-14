import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { DeleteMovie } from '@/domain/use-cases'

type HttpRequest = { id: number }
type Model = undefined | { id: number, name: string, year: string, description: string, length: number, gender: string, rating: number, watched: string, image: string, createdAt: Date, updatedAt: Date, deletedAt: Date | undefined }

export class DeleteMovieController extends Controller {
  constructor (private readonly deleteMovie: DeleteMovie) {
    super()
  }

  override async perform ({ id }: HttpRequest): Promise<HttpResponse<Model>> {
    const movie = await this.deleteMovie({ id })
    return ok(movie)
  }

  override buildValidators ({ id }: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: id, fieldName: 'id' })
        .required()
        .build()
    ]
  }
}
