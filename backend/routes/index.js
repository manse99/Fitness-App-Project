import { Router } from 'express'
import exercisesRoutes from './exercises.js'
import userRoutes from './user.js'

const router = Router()

router.get('/', (req, res) => {
    res.send('Not working out yet, but it is my new year\'s resolution')
})

router.use('/exercises', exercisesRoutes)
router.use('/user', userRoutes)

export default router