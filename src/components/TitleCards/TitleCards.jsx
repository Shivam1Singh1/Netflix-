import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])
  return (
    <div className='titlecards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards;
