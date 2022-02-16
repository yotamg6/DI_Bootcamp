import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Uploads = db.define("files", {
  filename: {
    type: DataTypes.STRING,
  },
  filetype: {
    type: DataTypes.STRING,
  },
  createdAt: {
    field: "createdate",
    type: DataTypes.DATE,
  },
  updatedAt: {
    field: "updatedate",
    type: DataTypes.DATE,
  },
});

export default Uploads;
