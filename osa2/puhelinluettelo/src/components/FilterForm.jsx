const FilterForm = ({ filterHandler }) => <div>filter: <input onChange={(event => filterHandler(event.target.value.toLowerCase()))} /></div>

export default FilterForm