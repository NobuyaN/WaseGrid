import express from 'express';
import { createCourse, deleteCourse, getAllCourses, updateCourse} from '../controllers/coursesController.js';

 const router = express.Router();

router.get("/", getAllCourses); 
router.post("/", createCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse)

export default router;