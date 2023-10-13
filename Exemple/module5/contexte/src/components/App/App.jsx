/* eslint-disable*/
import useLocalStorage from 'hooks/useLocalStorage'
import { useState } from 'react'
import Button from 'components/Button/Button'

const STORAGE_COUNTER_KEY = 'counter'

const App = () => {
  const [ counter, setCounter ] = useLocalStorage(STORAGE_COUNTER_KEY, 0)
  const ChangeCount = (delta) => setCounter(counter + delta) 
 
  return (
    <div>
      <p>Counter: {counter}</p>

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