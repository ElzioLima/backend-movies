export interface DBCreateMovie {
  create: (input: DBCreateMovie.Input) => Promise<DBCreateMovie.Output>
}

export namespace DBCreateMovie {
  export type Input = {
    name: string
    year: string
    description: string
    length: number
    gender: string
    rating: number
    watched: string
    image: string
  }
  export type Output = undefined | {
    id: number
    name: string
    year: string
    description: string
    length: number
    gender: string
    rating: number
    watched: string
    image: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | undefined
  }
}

export interface DBUpdateMovie {
  update: (input: DBUpdateMovie.Input) => Promise<DBUpdateMovie.Output>
}

export namespace DBUpdateMovie {
  export type Input = {
    id: number
    name: string
    year: string
    description: string
    length: number
    gender: string
    rating: number
    watched: string
    image: string
  }
  export type Output = undefined | {
    id: number
    name: string
    year: string
    description: string
    length: number
    gender: string
    rating: number
    watched: string
    image: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | undefined
  }
}

export interface DBListMovie {
  list: () => Promise<DBListMovie.Output>
}

export namespace DBListMovie {
  export type Output = undefined | Array<{
    id: number
    name: string
    year: string
    description: string
    length: number
    gender: string
    rating: number
    watched: string
    image: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | undefined
  }>
}

export interface DBListOneMovie {
  listOne: (input: DBListOneMovie.Input) => Promise<DBListOneMovie.Output>
}

export namespace DBListOneMovie {
  export type Input = {
    id: number
  }
  export type Output = undefined | {
    id: number
    name: string
    year: string
    description: string
    length: number
    gender: string
    rating: number
    watched: string
    image: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | undefined
  }
}

export interface DBDeleteMovie {
  delete: (input: DBDeleteMovie.Input) => Promise<DBDeleteMovie.Output>
}

export namespace DBDeleteMovie {
  export type Input = {
    id: number
  }
  export type Output = undefined | {
    id: number
    name: string
    year: string
    description: string
    length: number
    gender: string
    rating: number
    watched: string
    image: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | undefined
  }
}
