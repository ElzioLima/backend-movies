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
  router.post('/movie/create', auth, adapt(makeCreateMovieController()))
  router.get('/movie/list', auth, adapt(makeListMovieController()))
  router.put('/movie/update/:id', auth, adapt(makeUpdateMovieController()))
  router.get('/movie/list-one/:id', auth, adapt(makeListOneMovieController()))
  router.delete('/movie/delete/:id', auth, adapt(makeDeleteMovieController()))
}
