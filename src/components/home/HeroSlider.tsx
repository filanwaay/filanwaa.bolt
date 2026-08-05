import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeroSlider.css";

const slides = [
  {
    title: "Baro Diinta Islaamka",
    subtitle: "Qur'aan • Salaah • Towxiid • Xaj",
    video: "/videos/islam.mp4",
    button: "Bilow Barashada",
    link: "/diinta",
  },
  {
    title: "Baro Programming & AI",
    subtitle: "Python • HTML • CSS • JavaScript • AI",
    video: "/videos/coding.mp4",
    button: "Bilow Coding",
    link: "/technology",
  },
  {
    title: "Baro Suugaanta Soomaaliyeed",
    subtitle: "Gabayo • Sheekooyin • Maahmaahyo",
    video: "/videos/culture.mp4",
    button: "Akhri Hadda",
    link: "/culture",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider">
      <video
        key={slides[current].video}
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source src={slides[current].video} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <span className="hero-badge">
          🇸🇴 Filanwaa Academy
        </span>

        <h1>{slides[current].title}</h1>

        <p>{slides[current].subtitle}</p>

        <div className="hero-buttons">

          <Link to={slides[current].link} className="btn-primary">
            {slides[current].button}
          </Link>

          <button className="btn-secondary">
            ▶ Daawo Video
          </button>

        </div>

        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={current === index ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}