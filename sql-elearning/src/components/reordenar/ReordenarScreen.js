import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {SingleWord} from './SingleWord';
import './Reordenar.css';
import { useForm } from '../../hooks/useForm';




const sqlQueries = [
  {"frase": "select * from employees", nivel: 1},
  {"frase": "select first_name, last_name from employees where employee_id = 100", nivel: 2}
]

export const ReordenarScreen = () => {
  const [shuffledWord, setShuffledWord] = useState([])
  const [wordSolution, setWordSolution] = useState('')
  const [turnos, setTurns] = useState(0)
  const navigate = useNavigate();

  const randomNumber = () => {
    var randNum = Math.floor(Math.random() * (sqlQueries.length));
    return randNum
  }

  //mezclar cartas
  const shuffleWords = (number) => {
    const shuffledWords = [...sqlQueries]
    const wordToSolve = shuffledWords[number].frase.toString()

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

    setWordSolution(wordToSolve)
    const myShuffledWords = [...words].map((word) => ({ word, id: Math.random()}))
    setShuffledWord(myShuffledWords)
  }

  const [ formSolValues, handleSolInputChange, reset ] = useForm({
    lSol: '',
  });

  const { lSol } = formSolValues;

  const handleValidate = ( e ) => {
    e.preventDefault();
    if (lSol === wordSolution.toLowerCase()) {

      return (
        Swal.fire({
          icon: 'success',
          title: 'Felicidades',
          showCancelButton: false,
          confirmButtonText: '¡Siguiente!'
          }).then((result) => {
            if (result.isConfirmed) {
                shuffleWords(randomNumber())
                setTurns(prevTurns => prevTurns + 1)
                reset()
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              navigate('/');
          }
        })
      )
    } else {
      return (
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Has hecho un total de ${turnos} puntos`,
          showCancelButton: true,
          confirmButtonText: '¡Jugar de nuevo!',
          cancelButtonText: 'No, gracias',
          reverseButtons: false
          }).then((result) => {
            if (result.isConfirmed) {
                shuffleWords(randomNumber())
                setTurns(0)
                reset()
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              navigate('/');
          }
        })
      )
    }
  }

  useEffect(() => {
    shuffleWords(randomNumber())
  }, [])


  return (
    <>
      <div className="Memory d-flex flex-column">
        <h1 className="d-flex justify-content-center"> Sort Game </h1>
        <div className="d-flex justify-content-center">
          <button onClick={() => shuffleWords(randomNumber())} className="d-flex justify-content-center"> Juego Nuevo </button>
        </div>
        <p className="d-flex justify-content-center"> Puntos: {turnos}</p>
        <div className="row">
          {shuffledWord.map(({word, id}) => (
            <SingleWord
              key={id}
              id={id}
              word={word}
            />
          ))}
        </div>
      </div>

      <div className="Memory d-flex flex-column">
        <form onSubmit={handleValidate}>
          <div className="form-group row">
            <label>
              SOLUCIÓ:
          <input
                type="text"
                className="form-control input-lg"
                placeholder="Solució"
                name="lSol"
                autoComplete="off"
                value={ lSol.toLowerCase() }
                onChange={ handleSolInputChange }
              />
            </label>
          </div>
            <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
};
