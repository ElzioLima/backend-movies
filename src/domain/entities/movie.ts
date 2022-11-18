type MovieData = { 
  id: number,
  name: string,
  year: Date,
  description: string,
  length: number,
  gender: string,
  rating: number,
  watched: string,
  image: string,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date | undefined
}

export class Movie {
  id: number
  name: string
  year: Date
  description: string
  length: number
  gender: string
  rating: number
  watched: string
  image: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | undefined

  constructor (movieData: MovieData) {
    this.id = movieData.id
    this.name = movieData.name
    this.year = movieData.year
    this.description = movieData.description
    this.length = movieData.length
    this.gender = movieData.gender
    this.rating = movieData.rating
    this.watched = movieData.watched
    this.image = movieData.image
    this.createdAt = movieData.createdAt
    this.updatedAt = movieData.updatedAt
    this.deletedAt = movieData.deletedAt
  }
}
