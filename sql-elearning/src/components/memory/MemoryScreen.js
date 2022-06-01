import React, {useState, useEffect} from 'react';
import './Memory.css';
import {SingleCard} from './SingleCard';
import Swal from 'sweetalert2'


const cardImages = [
  {"src": "/assets/img/memory/alter.png", matched: false, comando: "DDL"},
  {"src": "/assets/img/memory/create.png", matched: false, comando: "DDL"},
  {"src": "/assets/img/memory/delete.png", matched: false, comando: "DML"},
  {"src": "/assets/img/memory/drop.png", matched: false, comando: "DDL"},
  {"src": "/assets/img/memory/grant.png", matched: false, comando: "DCL"},
  {"src": "/assets/img/memory/insert.png", matched: false, comando: "DML"},
  {"src": "/assets/img/memory/revoke.png", matched: false, comando: "DCL"},
  {"src": "/assets/img/memory/select.png", matched: false, comando: "DML"},
  {"src": "/assets/img/memory/update.png", matched: false, comando: "DML"}
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
        //Añadir pregunta
        Swal.fire({
         title: '¿Este comando es DCL, DDL o DML?',
         input: 'text',
         inputAttributes: {
           autocapitalize: 'off'
         },
         confirmButtonText: 'Enviar',
         allowOutsideClick: false,
         showLoaderOnConfirm: true,
         preConfirm: (comando) => {
           if (comando.toUpperCase() === choiceOne.comando) {
             Swal.fire({
               title: `¡CORRECTO!`
             })
             setCards(prevCards => {
               return prevCards.map(card => {
                 if (card.src === choiceOne.src) {
                   return {...card, matched: true}
                 } else {
                   return card
                 }
               })
             })
             setTimeout(() => resetTurn(), 1000)
           } else {
             Swal.fire({
               title: `¡ERROR!`
             })
             setTimeout(() => resetTurn(), 1000)
           }
         }
        })
      } else {
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
      <div className="d-flex justify-content-center">
        <button onClick={shuffleCards} className="d-flex justify-content-center"> Juego Nuevo </button>
      </div>
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
