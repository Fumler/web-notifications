import { Router } from 'express'
import article from './endpoints/article/article.router'

const router = new Router()

router.use('/articles', article)


export default router