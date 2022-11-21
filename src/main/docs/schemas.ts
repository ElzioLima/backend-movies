import {
  createMovieParamsSchema,
  updateMovieParamsSchema,
  deleteMovieParamsSchema,
  errorSchema,
  resultSchema,
  moviesSchema,
  movieSchema
} from "./schemas/"

export default {
  createMovieParams: createMovieParamsSchema,
  updateMovieParams: updateMovieParamsSchema,
  deleteMovieParams: deleteMovieParamsSchema,
  movies: moviesSchema,
  movie: movieSchema,
  error: errorSchema,
  result: resultSchema
}
