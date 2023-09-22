/* eslint-disable*/


import { useState } from 'react'
import Display from 'components/Display/Display'
import Button from 'components/Button/Button'

const App = () => {
  const [ counter, setCounter ] = useLocalStorage(STORAGE_COUNTER_KEY, 0)
  const ChangeCount = (delta) => setCounter(counter + delta) 
 
$
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