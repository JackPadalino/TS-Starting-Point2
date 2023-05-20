import db from "../db";
import Sequelize from "sequelize";
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

import { AlbumModelAttributes } from "./Album";

const { STRING, ENUM, UUID, UUIDV4 } = Sequelize;

export interface ArtistModelAttributes
  extends Model<
    InferAttributes<ArtistModelAttributes>,
    InferCreationAttributes<ArtistModelAttributes>
  > {
  addAlbums(album: AlbumModelAttributes): any;
  //id: CreationOptional<number>;
  name: string;
  genre: string;
}

const Artist = db.define<ArtistModelAttributes>("artist", {
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
