import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Resident from './Resident'
import Page from './Page'

function Location() {
  const [location, setlocation] = useState({})
  const [input, setInput] = useState('')
  const [page, setPage] = useState({})

  const random = Math.floor(Math.random() * 126) + 1

  let api = 'https://rickandmortyapi.com/api/location'

  useEffect(() => {
    axios.get(`${api}/${random}`).then((res) => setlocation(res.data))
    axios.get(`${api}?page=3`).then((res) => setPage(res.data.results))
  }, [])

  const searchLocation = () => {
    axios.get(`${api}${input}`).then((res) => setlocation(res.data.results))
  }

  const search = (e) => {
    axios.get(`${api}/${e}`).then((res) => setlocation(res.data))
  }

  console.log(location)

  return (
    <>
      <h1 className='title'>Rick and Morty Wiki</h1>
      <h2 className='subtitle'>{location?.name}</h2>
      <h3>Type: {location.type}</h3>
      <h3>Dimension: {location.dimension}</h3>
      <h3>Population: {location.residents?.length}</h3>

      <input
        placeholder='between 0 and 126'
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {input &&
        page.map((p) => (
          <Page key={p?.name} search={search} p={p} input={input} />
        ))}

      {input > 127 || input < 0 ? (
        <button onClick={searchLocation} disabled>
          Search
        </button>
      ) : (
        <button onClick={searchLocation}>Search</button>
      )}

      <ul>
        {location.residents?.map((resident) => (
          <Resident search={search} key={resident} url={resident} />
        ))}
      </ul>
    </>
  )
}

export default Location
