/* eslint-disable*/


import { useState } from 'react'
import Display from 'components/Display/Display'
import Button from 'components/Button/Button'

const App = () => {
  const [ counter, setCounter ] = useState(0)
  const ChangeCount = (delta) => setCounter(counter + delta)
 
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>

      <Button
        changeCount={ChangeCount}
        delta={1}
        text='plus'
      />
      <Button
        changeCount={ChangeCount}
        delta={-counter}
        text='zero'
      />     
      <Button
        changeCount={ChangeCount}
        delta={-1}
        text='minus'
      />           
    </div>
  )
}

export default App