import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import banner from "../../assets/banner.jpeg";
import title1 from "../../assets/title1.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCrads from '../../components/TitleCards/TitleCrad';
import Footer from '../../components/Footer/Footer';

// Define category variables
const top_rated = "top_rated";
const popular = "popular";
const upcoming = "upcoming";
const now_playing = "now_playing";

const Home = () => {
  return (
    <div className='home'>
      <Navbar />

      {/* Hero Banner */}
      <div className='hero'>
        <img src={banner} alt="Banner" className='banner-img' />
        <div className='hero-caption'>
          <img src={title1} alt="Show Title" className='caption-img' />
          <p>
            Experience the mystery, wit, and darkness of Wednesday Addams as she uncovers chilling secrets in a world full of intrigue.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="Play icon" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="More info" />
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Netflix-like Sections */}
      <div className='more-cards'>

        <section id="tv-shows">
          <h2>TV Shows</h2>
          <TitleCrads title="Only on Netflix" category={popular} />
        </section>

        <section id="movies">
          <h2>Blockbuster Movies</h2>
          <TitleCrads title="Blockbuster Movies" category={top_rated} />
        </section>

        <section id="new-popular">
          <h2>Upcoming</h2>
          <TitleCrads title="Upcoming" category={upcoming} />
        </section>

        <section id="my-list">
          <h2>Top Picks for You</h2>
          <TitleCrads title="Top Pics for You" category={now_playing} />
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default Home;
