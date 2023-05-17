import db from "../db";
import Sequelize from "sequelize";
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

const { STRING, ENUM, UUID, UUIDV4 } = Sequelize;

interface ArtistModel
  extends Model<
    InferAttributes<ArtistModel>,
    InferCreationAttributes<ArtistModel>
  > {
  //id: CreationOptional<number>;
  name: string;
  genre: string;
}

const Artist = db.define<ArtistModel>("artist", {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    unique: true,
  },
  genre: {
    type: ENUM,
    values: [
      "Industrial Techno",
      "Peak Time/Driving Techno",
      "Minimal Techno",
      "Melodic Techno",
    ],
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

export default Artist;
