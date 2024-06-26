const Persons = ({ persons, deleteHandler }) =>
    <div>
        {persons.map(person => <p key={person.name}>{person.name} {person.number} <button onClick={() => deleteHandler(person.id)}>remove</button></p>)}
    </div>

export default Persons