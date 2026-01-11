function Content({
  city,
  setCity,
  onSearch,
  loading,
  error,
  weather,
  queryCity,
  weatherClass,
  icon
}) {
  return (
    <div className="content">
      <input
        type="text"
        placeholder="Şehir giriniz"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <br /><br />

      <button onClick={onSearch}>
        Hava Durumunu Getir
      </button>

      {loading && <p>Yükleniyor...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && !loading && (
        <div className={`result-box ${weatherClass}`}>
  <div className="text-area">
    <h2>{queryCity} için Son Dakika</h2>
    <p>Sıcaklık: {weather.temperature}</p>
    <p>Rüzgar: {weather.wind}</p>
    <p>Durum: {weather.description}</p>
  </div>

  <div className="weather-icon">
    {icon}
  </div>
</div>

      )}
    </div>
  );
}

export default Content;
