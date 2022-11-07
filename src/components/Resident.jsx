import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Resident({ url }) {
  const [resident, setResident] = useState({})

  useEffect(() => {
    axios.get(url).then((res) => setResident(res.data))
  }, [])

  const circle = () => {
    if (resident.status === 'Alive') {
      return 'bg-green-600'
    } else if (resident.status === 'Dead') {
      return 'bg-red-600'
    } else {
      return 'bg-neutral-600'
    }
  }

  return (
    <li className='my-8 mx-3 rounded-sm overflow-hidden shadow-lg shadow-slate-900'>
      <img className='w-full' src={resident.image} alt='character' />
      <div className='bg-slate-200 p-3'>
        <div className='flex items-center gap-3'>
          <div className={`${circle()} w-3 h-3 rounded-full`}></div>
          <h2 className='text-2xl'> {resident.name}</h2>
        </div>
        <p>Status: {resident.status}</p>
        <p>Origin: {resident.origin?.name}</p>
        <p>Episodes: {resident.episode?.length}</p>
      </div>
    </li>
  )
}

export default Resident
