import express, { Router } from "express";
import * as metricsController from "../controllers/metricsController";

const router: Router = express.Router();

// Get task metrics
router.get("/metrics/tasks", metricsController.getTaskMetrics);

export default router;
