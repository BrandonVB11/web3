import { useState } from 'react'
import Display from './Display'
import Button from './Button'

const App = () => {
  const [ counter, setCounter ] = useState(0)
  const changeCount(delta) => setCounter(counter + delta);
  const increaseByOne = () => setCounter(counter + 1)

  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>

      <Button
        onClick={changeCount}
        text='plus'
      />
      <Button
        onClick={changeCount}
        text='zero'
      />     
      <Button
        onClick={changeCount}
        text='minus'
      />           
    </div>
  )
}

export default App