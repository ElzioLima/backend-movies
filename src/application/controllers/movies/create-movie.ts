import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { CreateMovie } from '@/domain/use-cases'

type HttpRequest = { name: string, year: string, description: string, length: number, gender: string, rating: number, watched: string, image: string }
type Model = undefined | { id: number, name: string, year: string, description: string, length: number, gender: string, rating: number, watched: string, image: string, createdAt: Date, updatedAt: Date, deletedAt: Date | undefined }

export class CreateMovieController extends Controller {
  constructor (private readonly createMovie: CreateMovie) {
    super()
  }

  override async perform ({ name, year, description, length, gender, rating, watched, image }: HttpRequest): Promise<HttpResponse<Model>> {
    const movie = await this.createMovie({ name, year, description, length, gender, rating, watched, image })
    return ok(movie)
  }

  override buildValidators ({ name, year, description, length, gender, rating, watched, image }: HttpRequest): Validator[] {
    return [
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
