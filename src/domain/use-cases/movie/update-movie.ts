import { DBUpdateMovie } from '@/domain/contracts/repos'
import { Movie } from '@/domain/entities'

type Setup = (movieRepo: DBUpdateMovie) => UpdateMovie
type Input = { id: number, name: string, year: Date, description: string, length: number, gender: string, rating: number, watched: string, image: string }
type Output = undefined | { id: number, name: string, year: Date, description: string, length: number, gender: string, rating: number, watched: string, image: string, createdAt: Date, updatedAt: Date, deletedAt: Date | undefined }
export type UpdateMovie = (input: Input) => Promise<Output>

export const setupUpdateMovie: Setup = (movieRepo) => async ({ id, name, year, description, length, gender, rating, watched, image }) => {
  const movieData = await movieRepo.update({ id, name, year, description, length, gender, rating, watched, image })
  if (movieData != null) {
    const movie = new Movie(movieData)
    return movie
  }
}
