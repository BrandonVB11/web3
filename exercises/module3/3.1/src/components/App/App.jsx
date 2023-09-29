/* eslint-disable*/
import React, { useState } from 'react';
import Button from 'components/Button/Button';
import Statistics from 'components/Statistics/Statistics';



const App = () => {

const [valueGood, setGood] = useState(0)
const [valueNeutral, setNeutral] = useState(0)
const [valueBad, setBad] = useState(0)
const [valueTotal, setTotal] = useState(0)
const [valueAverage, setAverage] = useState(0)
const [valuePositive, setPositive] = useState(0)

const handleGoodClick = () => {
  const updateGood = valueGood + 1
  setGood(updateGood)
  setTotal(updateGood + valueNeutral + valueBad)
  setAverage((updateGood - valueBad) / (updateGood + valueNeutral + valueBad))
  setPositive((updateGood / (updateGood + valueNeutral + valueBad)) * 100)
}

const handleNeutralClick = () => {
  const updateNeutral = valueNeutral + 1
  setNeutral(updateNeutral)
  setTotal(valueGood + updateNeutral + valueBad)
  setAverage((valueGood - valueBad) / (valueGood + updateNeutral + valueBad))
  setPositive((valueGood / (valueGood + updateNeutral + valueBad)) * 100)
}

const handleBadClick = () => {
  const updateBad = valueBad + 1
  setBad(updateBad)
  setTotal(valueGood + valueNeutral + updateBad)
  setAverage((valueGood - updateBad) / (valueGood + valueNeutral + updateBad))
  setPositive((valueGood / (valueGood + valueNeutral + updateBad)) * 100)
}



  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <h2>Statistics</h2>
      <Statistics good={valueGood} neutral={valueNeutral} bad={valueBad} total={valueTotal} average={valueAverage} positive={valuePositive} />
    </div>
  );
}

export default App;