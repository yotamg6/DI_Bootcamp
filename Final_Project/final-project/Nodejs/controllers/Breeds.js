import { breedFavs } from "../models/UserModel.js";
import { db } from "../config/Database.js";

export const AddToBreedFavs = async (req, res) => {
  try {
    const [results, metadata] = await db.query(
      `INSERT into breed_favs (username, breed_index) 
          SELECT '${req.body.userName}',${req.body.index}
          WHERE   NOT EXISTS 
                  (   SELECT  1
                      FROM    breed_favs 
                      WHERE   username = '${req.body.userName}' 
                      AND     breed_index = ${req.body.index}
                  );`,
      { type: db.QueryTypes.INSERT }
    );
    
    res.json(metadata);
  } catch (e) {
    console.log("error from backend addtobreedfavs", e);
  }
};

export const GetBreedFavs = async (req, res) => {
  try {
    const myFavs = await breedFavs.findAll({
      attributes: ["breed_index"],
      where: { username: req.body.userName },
    });
    res.json(myFavs);
  } catch (e) {
    console.log("error from getbreedfavs", e);
  }
};

export const DeleteFromBreedFavs = async (req, res) => {
  try {
    const response = await breedFavs.destroy({
      where: {
        username: req.body.userName,
        breed_index: req.body.breedIndex,
      },
    });
    res.json(response);
  } catch (e) {
    console.log("error from deleteFromBreedFavs", e);
  }
};
