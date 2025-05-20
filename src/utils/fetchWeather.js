import axios from "axios";

const BASE_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

export const fetchWeatherData = async (location) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  try {
    const res = await axios.get(`${BASE_URL}/${location}?key=${apiKey}&unitGroup=metric&include=hours`);
    return res.data;
  } catch (error) {
    throw new Error("Gagal mengambil data cuaca");
  }
};
