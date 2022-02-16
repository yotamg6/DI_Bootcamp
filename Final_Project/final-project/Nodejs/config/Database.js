import axios from "axios";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
export const getAllBreeds = async () => {
  try {
    const response = await axios.request({
      url: "https://api.TheDogAPI.com/v1/breeds",
      method: "GET",
      headers: {
        "x-api-key": "17d937a1-c776-46bc-9dda-dc68574fbe31",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: "localhost",
    dialect: "postgres",
  }
);
