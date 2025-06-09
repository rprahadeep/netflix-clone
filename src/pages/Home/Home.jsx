import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import './Home.css';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} className="banner-img"></img>
        <div className="hero-caption">
          <img src={hero_title} className="caption-img"></img>
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            imortal enemy
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon}></img>Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon}></img>More Info
            </button>
          </div>
          <TitleCards
            title={'Top Picks for You'}
            category={'top_rated'}
          ></TitleCards>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards
          title={'Blockbuster Movies'}
          category={'popular'}
        ></TitleCards>
        <TitleCards
          title={'Only on Netflix'}
          category={'now_playing'}
        ></TitleCards>
        <TitleCards title={'Upcoming'} category={'upcoming'}></TitleCards>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
