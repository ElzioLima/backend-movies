import { DBCreateMovie } from '@/domain/contracts/repos'
import { Movie } from '@/domain/entities'

type Setup = (movieRepo: DBCreateMovie) => CreateMovie
type Input = { name: string, year: string, description: string, length: number, gender: string, rating: number, watched: string, image: string }
type Output = undefined | { id: number, name: string, year: string, description: string, length: number, gender: string, rating: number, watched: string, image: string, createdAt: Date, updatedAt: Date, deletedAt: Date | undefined }
export type CreateMovie = (input: Input) => Promise<Output>

export const setupCreateMovie: Setup = (movieRepo) => async ({ name, year, description, length, gender, rating, watched, image }) => {
  const movieData = await movieRepo.create({ name, year, description, length, gender, rating, watched, image })
  if (movieData != null) {
    const movie: Movie | undefined = new Movie(movieData)
    return movie
  }
}
