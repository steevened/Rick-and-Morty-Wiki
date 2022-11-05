import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Resident({ url }) {
  const [resident, setResident] = useState({})

  // console.log(resident)

  useEffect(() => {
    axios.get(url).then((res) => setResident(res.data))
  }, [])

  const circle = () => {
    if (resident.status === 'Alive') {
      return <span className='circle green'></span>
    } else if (resident.status === 'Dead') {
      return <span className='circle red'></span>
    } else {
      return <span className='circle grey'></span>
    }
  }

  return (
    <li>
      <h3>{resident.name}</h3>
      <img src={resident.image} alt='character' />
      <p>
        Status: {circle()} {resident.status}
      </p>
      <p>Origin: {resident.origin?.name}</p>
      <p>Episodes: {resident.episode?.length}</p>
    </li>
  )
}

export default Resident
