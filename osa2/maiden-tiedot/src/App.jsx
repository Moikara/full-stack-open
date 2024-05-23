import { useState, useEffect } from 'react'
import axios from 'axios'

import SearchBar from './components/SearchBar'
import Results from './components/Results'

function App() {
  const [allCountries, setCountries] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => setCountries(response.data))
  }, [])

  const search = (event) => {
    if (event.target.value) {
      setData(allCountries.filter(contry => contry.name.common.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1))
      return  
    }
    setData(null)  
  }

  return (
    <div>
      <SearchBar handler={search} />
      <Results data={data} setData={setData}/>
    </div>
  )
}


export default App
