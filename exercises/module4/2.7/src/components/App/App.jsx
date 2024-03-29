import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

const addPerson = (event) => {
  event.preventDefault()
  
   // Vérifier si le nom existe déjà dans le tableau
 if (persons.some(person => person.name === newName)) {
  alert(`${newName} existe déjà dans la liste !`)
  return; // Ne pas ajouter le nom s'il existe déjà
}
  const personObject = {
    name: newName,
    id: persons.length + 1,
  }

  setPersons(persons.concat(personObject))
  setNewName('')
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
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <li key={person.id}>{person.name}</li>
        )}
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}


export default App