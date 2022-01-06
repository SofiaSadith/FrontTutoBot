import React, { useState, useEffect, useRef } from 'react';
import './Question.css'

const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if(findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if(error) {
      setError('');
    }
  }
  
  const nextClickHandler = (e) => {
    if(selected === '') {
      return setError('Selecciona una opción, por favor!');
    }
    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
    setSelected('');
    if(activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    }else {
      onSetStep(3);
    }
  }

  return(
    <div className='principal'>
    <div className="question justify-content-center">
      <div className="question-card">
        <div className="content">
          <h6 className="mb-10" style={{marginTop:"20px", fontSize:"1.5rem", marginRight:"2rem", letterSpacing:"normal", color:"white"}}>{data.question}</h6>
          <div className="control" ref={radiosWrapper}>
            {data.choices.map((choice, i) => (
              <label className="radio has-background-light" key={i}>
                <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                {choice}
              </label>
            ))}
          </div>
          {error && <div className="text-danger">{error}</div>}
          <button className="btn btn-secondary btn-medium btn-fullwidth" onClick={nextClickHandler}>Next</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Question;