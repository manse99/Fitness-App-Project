import { Router } from "express"
import * as controllers from "../controllers/user.js"

const router = Router()

router.get("/:id", controllers.getUser)
router.post("/", controllers.createUser)
router.put("/:id", controllers.updateUser)
router.delete("/:id", controllers.deleteUser)

export default router