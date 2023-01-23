import { Router } from "express"
import * as controllers from "../controllers/persons.js"

const router = Router()

router.get("/:id", controllers.getUser)
router.post("/", controllers.createNewUser)
router.put("/:id", controllers.updateUsern)
router.delete("/:id", controllers.deleteUser)

export default router