import { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function Weather() {
  const [city, setCity] = useState("");
  const [queryCity, setQueryCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [bg, setBg] = useState("cloudy");
  const [icon, setIcon] = useState("☁️");

  useEffect(() => {
    if (!queryCity) return;

    setLoading(true);
    setError("");

    fetch(`https://goweather.herokuapp.com/weather/${queryCity}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);

        if (!data.temperature) {
          setError("Şehir bulunamadı");
          setWeather(null);
          return;
        }

        setWeather(data);

        const desc = data.description.toLowerCase();

        if (desc.includes("rain")) {
          setBg("rainy");
          setIcon("🌧️");
        } else if (desc.includes("snow")) {
          setBg("snowy");
          setIcon("❄️");
        } else if (desc.includes("sun") || desc.includes("clear")) {
          setBg("sunny");
          setIcon("☀️");
        } else {
          setBg("cloudy");
          setIcon("☁️");
        }
      })
      .catch(() => {
        setLoading(false);
        setError("Bir hata oluştu");
      });
  }, [queryCity]);

  return (
    <div className={`app ${bg}`}>
      <div className="weather-box">
        <Header />

        <Content
          city={city}
          setCity={setCity}
          queryCity={queryCity}
          weather={weather}
          loading={loading}
          error={error}
          weatherClass={`card-${bg}`}
          icon={icon}
          onSearch={() => setQueryCity(city)}
        />

        <Footer />
      </div>
    </div>
  );
}

export default Weather;
