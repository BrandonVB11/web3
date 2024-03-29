import { useState } from 'react'
import Person from 'components/Person/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
     number: '040-123456' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

const addPerson = (event) => {
  event.preventDefault()
    const personObject = {
    name: newName,
    number: newNumber,
    id: persons.length + 1,
  }  
  setPersons(persons.concat(personObject))
  setNewName('')
  setNewNumber('')
}

const handlePersonChange = (event) => {
  console.log(event.target.value)
  setNewName(event.target.value)
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handlePersonChange}
          />
        </div>
        <div>number: <input 
        value={newNumber}
        onChange={handlePersonChange}
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.id} name={person.name} number={person.number} />
        )}
      </ul>
      <div>debug: {newName}</div>
      <div>debug: {newNumber}</div>
    </div>
  )
}


export default App