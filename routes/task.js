import express from "express"
import { getTask, newTask,updateTask ,deleteTask} from "../controllers/task.js";
import { isAuthenticate } from "../middleware/auth.js";
const router = express.Router();

router.post("/add",isAuthenticate,newTask);
router.get("/access",isAuthenticate,getTask);
router.route("/:id")
.put(isAuthenticate,updateTask)
.delete(isAuthenticate,deleteTask);
export default router;