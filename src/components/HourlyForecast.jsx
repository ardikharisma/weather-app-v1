const HourlyForecast = ({ hours }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow p-6">
      <h3 className="text-xl font-semibold text-blue-700 mb-4">Cuaca 24 Jam</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {hours.map((hour, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow text-center border border-blue-100 hover:bg-blue-50 transition"
          >
            <p className="text-sm font-medium text-gray-600">{hour.datetime}</p>
            <p className="text-lg font-bold text-blue-700">{hour.temp}°C</p>
            <p className="text-sm text-gray-500">{hour.conditions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
