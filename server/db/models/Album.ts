import db from "../db";
import Sequelize from "sequelize";
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { SongModelAttributes } from "./Song";

const { STRING, UUID, UUIDV4 } = Sequelize;

export interface AlbumModelAttributes
  extends Model<
    InferAttributes<AlbumModelAttributes>,
    InferCreationAttributes<AlbumModelAttributes>
  > {
  addSongs(song: SongModelAttributes): any;
  //id: CreationOptional<number>;
  title: string;
}

const Album = db.define<AlbumModelAttributes>("album", {
  title: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    unique: true,
  },
});

export default Album;
