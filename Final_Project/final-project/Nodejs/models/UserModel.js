import { Sequelize } from "sequelize";
import { db } from "../config/Database.js";

const { DataTypes } = Sequelize;

export const Uploads = db.define("files", {
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
});

export const Authentication = db.define("authentication", {
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
  }
}, {
    freezeTableName=true
});
