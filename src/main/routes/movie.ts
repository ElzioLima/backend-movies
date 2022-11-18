import { adaptExpressRoute as adapt } from '@/main/adapters'
import {
  makeCreateMovieController,
  makeListMovieController,
  makeUpdateMovieController,
  makeListOneMovieController,
  makeDeleteMovieController
} from '@/main/factories/application/controllers'
import { auth } from '@/main/middlewares'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/movie', auth, adapt(makeCreateMovieController()))
  router.get('/movie', auth, adapt(makeListMovieController()))
  router.put('/movie/:id', auth, adapt(makeUpdateMovieController()))
  router.get('/movie/:id', auth, adapt(makeListOneMovieController()))
  router.delete('/movie/:id', auth, adapt(makeDeleteMovieController()))
}
