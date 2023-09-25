import { Request, Response } from "express";
import Task from "../models/taskModel";
import { sendError } from "../utils/errorHandler";
import { paginate } from "../utils/pagination";

export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, description, status } = req.body;

    const task = await Task.create({
      title,
      description,
      status,
    });

    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    sendError(res, 500, "Internal server error");
  }
};

export const updateTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const { title, description, status } = req.body;

    const [updatedRows] = await Task.update(
      {
        title,
        description,
        status,
      },
      {
        where: { id },
      }
    );

    if (updatedRows === 0) {
      res.status(404).json({ error: "Task not found" });
    } else {
      const updatedTask = await Task.findByPk(id);
      if (!updatedTask) {
        res.status(404).json({ error: "Task not found" });
      } else {
        res.status(200).json(updatedTask);
      }
    }
  } catch (error) {
    console.error(error);
    sendError(res, 500, "Internal server error");
  }
};

export const getAllTasks = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { page = 1, limit = 10 } = req.query; // Default to page 1 and limit 10 tasks per page

  try {
    const totalTasks = await Task.count();

    const { offset, totalPages } = paginate(
      Number(page),
      Number(limit),
      totalTasks
    );

    const tasks = await Task.findAll({
      offset,
      limit: Number(limit),
    });

    res.status(200).json({
      tasks,
      pageInfo: {
        page: Number(page),
        limit: Number(limit),
        totalTasks,
        totalPages,
      },
    });
  } catch (error) {
    console.error(error);
    sendError(res, 500, "Internal server error");
  }
};
