const WeatherCard = ({ data }) => {
  const conditions = data?.currentConditions;

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow p-6 mb-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-3">{data?.resolvedAddress || "Lokasi tidak diketahui"}</h2>
      <ul className="space-y-1 text-gray-700">
        <li>🌤️ {conditions?.conditions || "Tidak tersedia"}</li>
        <li>🌡️ Suhu: {conditions?.temp ?? "N/A"}°C</li>
        <li>💨 Angin: {conditions?.windspeed ?? "N/A"} km/j</li>
        <li>🌧️ Peluang hujan: {conditions?.precipprob ?? 0}%</li>
      </ul>
    </div>
  );
};

export default WeatherCard;
