import db from "../db";
import Sequelize from "sequelize";
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

const { STRING, INTEGER, ENUM, UUID, UUIDV4 } = Sequelize;

interface SongModel
  extends Model<
    InferAttributes<SongModel>,
    InferCreationAttributes<SongModel>
  > {
  //id: CreationOptional<number>;
  title: string;
  bpm: number;
  key: string;
}

const Song = db.define<SongModel>("song", {
  title: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    unique: true,
  },
  bpm: {
    type: INTEGER,
    allowNull: false,
  },
  key: {
    type: ENUM,
    values: [
      "1A",
      "1B",
      "2A",
      "2B",
      "3A",
      "3B",
      "4A",
      "4B",
      "5A",
      "5B",
      "6A",
      "6B",
      "7A",
      "7B",
      "8A",
      "8B",
      "9A",
      "9B",
      "10A",
      "10B",
      "11A",
      "11B",
      "12A",
      "12B",
    ],
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    unique: false,
  },
});

export default Song;
