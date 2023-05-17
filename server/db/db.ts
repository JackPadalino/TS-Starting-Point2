import { Sequelize } from "sequelize";

const config = {
  logging: false,
};
const DB_NAME = "song_db";
const DB_URL = `postgres://localhost/${DB_NAME}`;

const db = new Sequelize(process.env.DATABASE_URL || DB_URL, config);

export default db;
