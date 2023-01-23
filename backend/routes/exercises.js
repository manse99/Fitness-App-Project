import { Router } from "express"
import * as controllers from "../controllers/exercises.js"

const router = Router()

router.get("/", controllers.getExercises)
router.get("/:id", controllers.getExercise)
router.post("/", controllers.createExercise)
router.put("/:id", controllers.updateExercise)
router.delete("/:id", controllers.deleteExercise)

export default router