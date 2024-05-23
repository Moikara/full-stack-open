import { useEffect, useState } from 'react'
import axios from 'axios'

import personService from './services/persons'

import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Message'
import Error from './components/Error'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    personService.getAll()
      .then(data => setPersons(data))
  }, [])

  const savePerson = (event) => {
    event.preventDefault()
    const newPerson = { name: newName, number: newNumber }
    const updatedPerson = persons.find(person => person.name === newPerson.name)

    if (updatedPerson) {
      if (window.confirm(`${updatedPerson.name} is already added. Replace the old number with a new one?`)) {
        personService.update(updatedPerson.id, { ...updatedPerson, number: newNumber })
          .then(data => {
            setPersons(persons.map(person => person.id != data.id ? person : data))
            setNewName('')
            setNewNumber('')
            setMessage(`${updatedPerson.name} updated`)
          })

        setTimeout(() => {
          setMessage(null)
        }, 5000)
      }
      return
    }

    personService.create(newPerson)
      .then(data => {
        setPersons(persons.concat(data))
        setNewName('')
        setNewNumber('')
        setMessage(`${newPerson.name} added`)
      })

    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const removePerson = (id) => {
    const person = persons.find(person => person.id = id)
    if (window.confirm(`remove ${person.name}?`))
      personService.remove(id)
        .then(data => {
          setPersons(persons.filter(person => person.id != data.id))
          setMessage(`${data.name} removed`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        }).catch(error => {
          setError(`${person.name} already removed from the server`)
          setTimeout(() => {
            setError(null)
          }, 5000)
        })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Error error={error}/>
      <Notification message={message} />
      <FilterForm filterHandler={setFilter} />
      <h3>Add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} nameHandler={setNewName} numberHandler={setNewNumber} submitHandler={savePerson} />
      <h3>Numbers</h3>
      <Persons persons={persons.filter(person => person.name.toLowerCase().indexOf(filter) > -1)} deleteHandler={removePerson} />
    </div>
  )
}

export default App