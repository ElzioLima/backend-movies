import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { UpdateMovie } from '@/domain/use-cases'

type HttpRequest = { id: number, name: string, year: Date, description: string, length: number, gender: string, rating: number, watched: string, image: string }
type Model = undefined | { id: number, name: string, year: Date, description: string, length: number, gender: string, rating: number, watched: string, image: string, createdAt: Date, updatedAt: Date, deletedAt: Date | undefined }

export class UpdateMovieController extends Controller {
  constructor (private readonly updateMovie: UpdateMovie) {
    super()
  }

  override async perform ({ id, name, year, description, length, gender, rating, watched, image }: HttpRequest): Promise<HttpResponse<Model>> {
    const movie = await this.updateMovie({ id, name, year, description, length, gender, rating, watched, image })
    return ok(movie)
  }

  override buildValidators ({ id, name, year, description, length, gender, rating, watched, image }: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: id, fieldName: 'id' })
        .required()
        .build(),
        ...Builder.of({ value: name, fieldName: 'name' })
        .required()
        .build(),
      ...Builder.of({ value: year, fieldName: 'year' })
        .required()
        .build(),
      ...Builder.of({ value: description, fieldName: 'description' })
        .required()
        .build(),
        ...Builder.of({ value: length, fieldName: 'length' })
        .required()
        .build(),
        ...Builder.of({ value: gender, fieldName: 'gender' })
        .required()
        .build(),
        ...Builder.of({ value: rating, fieldName: 'rating' })
        .required()
        .build(),
        ...Builder.of({ value: watched, fieldName: 'watched' })
        .required()
        .build(),
        ...Builder.of({ value: image, fieldName: 'image' })
        .required()
        .build()
    ]
  }
}
