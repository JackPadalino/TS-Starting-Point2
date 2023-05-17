import db from "../db";
import Sequelize from "sequelize";
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

const { STRING, UUID, UUIDV4 } = Sequelize;

interface AlbumModel
  extends Model<
    InferAttributes<AlbumModel>,
    InferCreationAttributes<AlbumModel>
  > {
  //id: CreationOptional<number>;
  title: string;
}

const Album = db.define<AlbumModel>("album", {
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
