import React, {useState, useEffect} from 'react';
import './Memory.css';
import {SingleCard} from './SingleCard';


const cardImages = [
  {"src": "/assets/img/memory/alter.png", matched: false },
  {"src": "/assets/img/memory/create.png", matched: false },
  {"src": "/assets/img/memory/delete.png", matched: false },
  {"src": "/assets/img/memory/drop.png", matched: false },
  {"src": "/assets/img/memory/grant.png", matched: false },
  {"src": "/assets/img/memory/insert.png", matched: false },
  {"src": "/assets/img/memory/revoke.png", matched: false },
  {"src": "/assets/img/memory/select.png", matched: false },
  {"src": "/assets/img/memory/update.png", matched: false }
]

export const MemoryScreen = () => {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)



  //mezclar cartas
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  // escoger opcion
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //comprarar cartas
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        console.log('diferentes!');
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  // resetear turno
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="Memory d-flex flex-column">
      <h1 className="d-flex justify-content-center"> Memory Game </h1>
      <button onClick={shuffleCards} className="d-flex justify-content-center"> Juego Nuevo </button>
      <p className="d-flex justify-content-center"> Turnos: {turns}</p>
      <div className="card-grid">
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  )
};
