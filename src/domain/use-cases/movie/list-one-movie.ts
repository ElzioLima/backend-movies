import { DBListOneMovie } from '@/domain/contracts/repos'
import { Movie } from '@/domain/entities'

type Setup = (movieRepo: DBListOneMovie) => ListOneMovie
type Input = { id: number }
type Output = undefined | { id: number, name: string, year: Date, description: string, length: number, gender: string, rating: number, watched: string, image: string, createdAt: Date, updatedAt: Date, deletedAt: Date | undefined }
export type ListOneMovie = (input: Input) => Promise<Output>

export const setupListOneMovie: Setup = (movieRepo) => async ({ id }) => {
  const movieData = await movieRepo.listOne({ id })
  if (movieData != null) {
    const movie = new Movie(movieData)
    return movie
  }
}
