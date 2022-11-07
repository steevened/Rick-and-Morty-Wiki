import React from 'react'

const LocationInfo = ({ location, residents }) => {
  return (
    <div className='text-slate-600 flex flex-col items-center'>
      <h2 className='text-center text-4xl my-10 font-bold'>{location?.name}</h2>
      <div className='flex justify-between p-8 w-5/6 max-w-6xl flex-col text-lg font-medium gap-5  text-left shadow-lg md:flex-row md:mx-8 bg-slate-300 rounded-md sm:mx-3'>
        <h3>
          <span className='font-semibold'>Type:</span> {location.type}
        </h3>
        <h3>
          <span className='font-semibold'>Dimension:</span> {location.dimension}
        </h3>
        <h3>
          <span className='font-semibold'>Population:</span>{' '}
          {location.residents?.length}
        </h3>
      </div>
    </div>
  )
}

export default LocationInfo
