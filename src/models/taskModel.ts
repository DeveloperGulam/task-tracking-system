// import { Document, Schema, model } from "mongoose";
import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import connection from "../config/database";

interface TaskAttributes {
  id?: number;
  title: string;
  description?: string;
  status: "open" | "inprogress" | "completed";
}

const Task = connection.define<Model<TaskAttributes>>("Task", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM("open", "inprogress", "completed"),
    defaultValue: "open",
  },
});

export default Task;
