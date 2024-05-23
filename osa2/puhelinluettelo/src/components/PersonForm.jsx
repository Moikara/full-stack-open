const PersonForm = ({ newName, newNumber, nameHandler, numberHandler, submitHandler }) =>
    <form onSubmit={submitHandler}>
        <div>
            name: <input value={newName} onChange={event => nameHandler(event.target.value)} />
        </div>
        <div>
            number: <input value={newNumber} onChange={event => numberHandler(event.target.value)} />
        </div>
        <div>
            <button type="submit" >add</button>
        </div>
    </form>

export default PersonForm