import { DBListMovie } from '@/domain/contracts/repos'
import { Movie } from '@/domain/entities'

type Setup = (movieRepo: DBListMovie) => ListMovie
type Output = undefined | Array<{ id: number, name: string, year: string, description: string, length: number, gender: string, rating: number, watched: string, image: string, createdAt: Date, updatedAt: Date, deletedAt: Date | undefined }>
export type ListMovie = () => Promise<Output>

export const setupListMovie: Setup = (movieRepo) => async () => {
  const movieData = await movieRepo.list()
  if (movieData != null) {
    const movieList = movieData.map((movie) => {
      return new Movie(movie)
    })
    return movieList
  }
}
