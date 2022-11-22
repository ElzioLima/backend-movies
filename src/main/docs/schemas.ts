import {
  createMovieParamsSchema,
  updateMovieParamsSchema,
  deleteMovieParamsSchema,
  errorSchema,
  resultSchema,
  moviesSchema,
  movieSchema,
  loginParamsSchema
} from "./schemas/"

export default {
  createMovieParams: createMovieParamsSchema,
  updateMovieParams: updateMovieParamsSchema,
  deleteMovieParams: deleteMovieParamsSchema,
  moviesParams: moviesSchema,
  movieParams: movieSchema,
  loginParams: loginParamsSchema,
  error: errorSchema,
  result: resultSchema
}
