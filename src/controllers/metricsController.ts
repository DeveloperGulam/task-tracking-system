import { Request, Response } from "express";
import Task from "../models/taskModel";
import connection from "../config/database";

// Get task metrics and timelines
export const getTaskMetrics = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const metrics = {
      current: await getCurrentTaskMetrics(),
      historical: await getHistoricalTaskMetrics(),
    };

    res.status(200).json(metrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getCurrentTaskMetrics = async () => {
  const openTasksCount = await Task.count({ where: { status: "open" } });
  const inProgressTasksCount = await Task.count({
    where: { status: "inprogress" },
  });
  const completedTasksCount = await Task.count({
    where: { status: "completed" },
  });

  return {
    open_tasks: openTasksCount,
    inprogress_tasks: inProgressTasksCount,
    completed_tasks: completedTasksCount,
  };
};

const getHistoricalTaskMetrics = async () => {
  return Task.findAll({
    attributes: [
      [
        connection.fn("DATE_FORMAT", connection.col("createdAt"), "%M %Y"),
        "date",
      ],
      [connection.fn("COUNT", connection.col("id")), "task_count"],
      [
        connection.literal('SUM(CASE WHEN status = "open" THEN 1 ELSE 0 END)'),
        "open_tasks",
      ],
      [
        connection.literal(
          'SUM(CASE WHEN status = "inprogress" THEN 1 ELSE 0 END)'
        ),
        "inprogress_tasks",
      ],
      [
        connection.literal(
          'SUM(CASE WHEN status = "completed" THEN 1 ELSE 0 END)'
        ),
        "completed_tasks",
      ],
    ],
    group: ["date"],
    order: [[connection.col("date"), "ASC"]],
  });
};
