import axios from "axios";
const GetAllBreeds = async () => {
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
export default GetAllBreeds;
