import { Router } from "express"
import * as controllers from "../controllers/exerciseRec.js"

const router = Router()

router.get("/", controllers.getExerciseRecs)
router.get("/:id", controllers.getExerciseRec)
router.post("/", controllers.createExerciseRec)
router.put("/:id", controllers.updateExerciseRec)
router.delete("/:id", controllers.deleteExerciseRec)

export default router