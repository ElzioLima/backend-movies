import { DBDeleteMovie } from '@/domain/contracts/repos'
import { Movie } from '@/domain/entities'

type Setup = (movieRepo: DBDeleteMovie) => DeleteMovie
type Input = { id: number }
type Output = undefined | { id: number, name: string, year: Date, description: string, length: number, gender: string, rating: number, watched: string, image: string, createdAt: Date, updatedAt: Date, deletedAt: Date | undefined }
export type DeleteMovie = (input: Input) => Promise<Output>

export const setupDeleteMovie: Setup = (movieRepo) => async ({ id }) => {
  const movieData = await movieRepo.delete({ id })
  if (movieData != null) {
    const movie = new Movie(movieData)
    return movie
  }
}
