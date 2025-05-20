import { useEffect, useState } from "react";
import { fetchWeatherData } from "./utils/fetchWeather";
import WeatherCard from "./components/WeatherCard";
import HourlyForecast from "./components/HourlyForecast";
import Loader from "./components/Loader";

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!location) return;
    setLoading(true);
    try {
      const data = await fetchWeatherData(location);
      setWeatherData(data);
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      setLoading(true);
      try {
        const data = await fetchWeatherData(`${latitude},${longitude}`);
        setWeatherData(data);
      } catch (err) {
        console.error("Gagal mengambil data lokasi", err);
      }
      setLoading(false);
    });
  }, []);

  return (
<div className="min-h-screen justify-center items-center bg-gradient-to-br from-blue-200 via-blue-100 to-white p-6 font-sans">
  <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
    <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">🌦️ Weather App</h1>


        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Masukkan lokasi..."
            className="w-full p-2 border rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={handleSearch} className="bg-blue-500 text-white px-4 rounded">
            Cari
          </button>
        </div>

        {loading ? (
          <Loader />
        ) : weatherData ? (
          <>
            <WeatherCard data={weatherData} />
            {/* ✅ FIX: Gunakan weatherData.days[0].hours */}
            <HourlyForecast hours={weatherData?.days?.[0]?.hours?.slice(0, 24) || []} />
          </>
        ) : (
          <p className="text-center text-gray-500">Tidak ada data.</p>
        )}
      </div>
    </div>
  );
}

export default App;
