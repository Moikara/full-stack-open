const SearchBar = ({ handler }) =>
    <form>
        <label>
            Find countries:
            <input type="text" onChange={handler}/>
        </label>
    </form>

export default SearchBar