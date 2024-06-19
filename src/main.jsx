import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
/*

// This is the Api handling for titlecards

import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.   eyJhdWQiOiJlZTN1NzczZDIwY2M2Y2NhNWQ4YWVjMjQzNTd1NDc1ZCIsInN1YiI6I jY2MjIyMDFhYWUzODQzMDE4NzJhNTJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLC J2ZXJzaW9uIjoxfQ.vPDW2QwNr9hIRdOvJx_x8hbHnDYZGHMtnZwfkqb3J8U'
    }
  };



  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}now_playing?language=en-US& page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])
  return (
    <div className='titlecards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
*/
// Home.jsx

/*import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className="hero">
                <img src={hero_banner} alt="Hero Banner" className='banner-img' />
                <div className="hero-caption">
                    <img src={hero_title} alt="Hero Title" className='caption-img' />
                    <p className='hero-text'>
                        Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.
                    </p>
                    <div className="hero-btns">
                        <button className='btn'>
                            <img src={play_icon} alt="Play Icon" /> Play
                        </button>
                        <button className='btn dark-btn'>
                            <img src={info_icon} alt="Info Icon" /> More Info
                        </button>
                    </div>
                    <TitleCards />
                </div>
            </div>
            <div className="more-cards">
                <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
                <TitleCards title={"Only on Netflix"} category={"popular"} />
                <TitleCards title={"Upcoming Movies"} category={"upcoming"} />
                <TitleCards title={"Top Pics for You"} category={"now_playing"} />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
*/