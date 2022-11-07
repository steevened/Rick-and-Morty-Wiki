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
    <li className='bg-slate-200 my-8 mx-3 rounded-md overflow-hidden shadow-lg shadow-slate-900 sm:flex sm:w-6xl sm:h-60 sm:gap-2'>
      <img
        loading='lazy'
        className='w-full sm:basis-1/2'
        src={resident?.image}
        alt='character'
      />
      <div className='bg-slate-200 p-3 sm:w-full py-6 text-slate-700'>
        <div className='flex items-center gap-3 mb-2 '>
          <div className={`${circle()} w-3 h-3 rounded-full`}></div>
          <h2 className='text-2xl sm:text-3xl font-bold'> {resident?.name}</h2>
        </div>
        <div className='flex flex-col sm:gap-3 sm:justify-center sm:mt-5'>
          <p>
            <span className='font-semibold'> Status:</span> {resident.status}
          </p>
          <p>
            <span className='font-semibold'>Origin:</span>{' '}
            {resident.origin?.name}
          </p>
          <p>
            <span className='font-semibold'>Episodes:</span>{' '}
            {resident.episode?.length}
          </p>
        </div>
      </div>
    </li>
  )
}

export default Resident
