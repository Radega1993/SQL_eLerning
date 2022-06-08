import React, {useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import './Reordenar.css';


const sqlQueries = [
  {"frase": "select * from employees", nivel: 1},
  {"frase": "select first_name, last_name from employees where employee_id = 100", nivel: 2}
  ]

export const ReordenarScreen = () => {
  const [shuffledWord, setShuffledWord] = useState([])
  const [wordSolution, setWordSolution] = useState('')
  const [turns, setTurns] = useState(0)

  const handleValidar = () => {
    console.log("validado");
  }

  const randomNumber = () => {
    var randNum = Math.floor(Math.random() * (sqlQueries.length));
    return randNum
  }

  //mezclar cartas
  const shuffleWords = (number) => {
    const shuffledWords = [...sqlQueries]
    const wordToSolve = shuffledWords[number].frase.toString()
    //setWordSolution(wordToSolve)
    var words = wordToSolve.split(" ")
    for (var i = 0; i < words.length - 1; i++) {
      words[i] += " ";
    }

    var currentIndex = words.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;
       temporaryValue = words[currentIndex];
       words[currentIndex] = words[randomIndex];
       words[randomIndex] = temporaryValue;
     }

    console.log(shuffledWords[number]);
    const myShuffledWords = [...words].map((word) => ({ word, id: Math.random()}))
    setShuffledWord(myShuffledWords)
    console.log(myShuffledWords);

  }

  useEffect(() => {
    shuffleWords(randomNumber())
  }, [])

  return (

    <div className="Memory d-flex flex-column">
      <h1 className="d-flex justify-content-center"> Sort Game </h1>
      <div className="d-flex justify-content-center">
        <button onClick={() => shuffleWords(randomNumber())} className="d-flex justify-content-center"> Juego Nuevo </button>
      </div>
      <p className="d-flex justify-content-center"> Turnos: {turns}</p>
      <div className="row">
        {shuffledWord.map(({word, id}, index) => {
          return (
            <div className="col-sm btn btn-primary box"  key={id}> {word} </div>
          );
        })}
      </div>
    </div>
  )
};
