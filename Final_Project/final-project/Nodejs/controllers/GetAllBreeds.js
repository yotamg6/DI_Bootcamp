import axios from "axios";

export const GetAllBreeds = async (req, res) => {
  try {
    const response = await axios.request({
      url: "https://api.TheDogAPI.com/v1/breeds",
      method: "GET",
      headers: {
        "x-api-key": "17d937a1-c776-46bc-9dda-dc68574fbe31",
      },
    });
    res.json(response.data);
  } catch (e) {
    console.log("couldnt fetch, from get all breeds", e);
  }
};
