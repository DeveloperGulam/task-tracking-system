import { Sequelize } from "sequelize";

const connection = new Sequelize(
  process.env.DATABASE as string,
  process.env.USER as string,
  process.env.PASSWORD as string,
  {
    host: process.env.HOST,
    dialect: "mysql",
  }
);

export default connection;
