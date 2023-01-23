import { Router } from 'express'
import exercisesRoutes from './exercises.js'
import exerciseRecRoutes from './exerciseRecs.js'

const router = Router()

router.get('/', (req, res) => {
    res.send('Not working out yet, but it is my new year\'s resolution')
})

router.use('/exercises', exercisesRoutes)
router.use('/exerciseRecs', exerciseRecRoutes)

export default router