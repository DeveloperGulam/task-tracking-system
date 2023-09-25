import express, { Router } from "express";
import * as taskController from "../controllers/taskController";

const router: Router = express.Router();

// Create a task
router.post("/tasks", taskController.createTask);

// Update a task
router.patch("/tasks/:id", taskController.updateTask);

// Get all tasks with pagination
router.get("/tasks", taskController.getAllTasks);

export default router;
