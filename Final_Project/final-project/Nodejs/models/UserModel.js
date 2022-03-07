import { Sequelize } from "sequelize";
import { db } from "../config/Database.js";

const { DataTypes } = Sequelize;

export const Uploads = db.define(
  "uploads",
  {
    username: {
      type: DataTypes.STRING,
    },
    breed: {
      type: DataTypes.STRING,
    },
    dogname: {
      type: DataTypes.STRING,
    },
    about_dog: {
      type: DataTypes.STRING,
    },
    filename: {
      type: DataTypes.STRING,
    },
    filetype: {
      type: DataTypes.STRING,
    },
    createdAt: {
      field: "createdat",
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: "updatedat",
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
  }
);

export const Users = db.define(
  "users",
  {
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    createdAt: {
      field: "createdat",
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: "updatedat",
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
  }
);

export const Favs = db.define(
  "favs",
  {
    username: {
      type: DataTypes.STRING,
    },
    selecteduser: {
      type: DataTypes.STRING,
    },
    createdAt: false,
    updatedAt: false,
  },
  {
    freezeTableName: true,
  }
);

export const breedFavs = db.define(
  "breed_favs",
  {
    username: {
      type: DataTypes.STRING,
    },
    breed_index: {
      type: DataTypes.SMALLINT,
    },
    createdAt: false,
    updatedAt: false,
  },
  {
    freezeTableName: true,
  }
);
