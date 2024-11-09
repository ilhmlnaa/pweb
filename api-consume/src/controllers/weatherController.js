import axios from "axios";
import response from "../utils/response.js";
import scrapeData from "../utils/scrapeData.js";

const BASE_URL = "https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=";

export const getWeatherBySearch = async (req, res) => {
  const search  = req.params.search;

  if (!search) {
    return response(200, null, "search is required", res);
  }

  try {
    const { results, error } = await scrapeData(search);  

    if (error) {  
      return response(500, "No regions found", "!OK", res);  
    }

    const data = results.map((result) => {
      return {
        ...result,
        weatherData: `${req.protocol}://${req.get('host')}/v1/weather/id/${result.codeArea}`,
      };
    });

    response(200, data, "OK", res);
  } catch (error) {
    response(500, "Internal Server Error", "!OK", res);  
  }
};


export const getWeatherById = async (req, res) => {
    const id = req.params.id;
  
    if (!id) {
      return response(200, null, "ID is required", res);
    }
  
    try {
      const axiosResponse = await axios.get(`${BASE_URL}${id}`);
      const weatherData = axiosResponse.data;

      if (axiosResponse.status !== 200) {
        return response(200, null, "Data not found", res);
      }

      response(200, weatherData, "OK", res); 
    } catch (error) {
      response(500, error.message, "!OK", res);
    }
  };
  
