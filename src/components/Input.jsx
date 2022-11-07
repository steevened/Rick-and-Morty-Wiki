import React, { useState } from 'react'
import Page from './Page'

const Input = ({ page, search }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [input, setInput] = useState('')
  const [selected, setSelected] = useState(false)

  console.log(input)

  return (
    <div className='flex max-w-2xl w-5/6 mx-auto  flex-col justify-center my-10 relative'>
      <input
        className={`py-3 w-full mx-auto md:px-20 text-center focus:outline-none  focus:bg-sky-200  rounded-lg bg-slate-300 shadow-lg transition-colors placeholder:text-slate-700 
        placeholder:font-regular
        duration-500`}
        placeholder='Type a location'
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div
        className={`${
          input
            ? `bg-slate-300  h-40  p-2 absolute top-12 overflow-auto left-0 right-0 rounded-t-lg shadow-lg`
            : 'hidden'
        } `}
      >
        {input &&
          page?.map((p) => (
            <Page
              key={p?.name}
              search={search}
              p={p}
              input={input}
              setInput={setInput}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
      </div>
    </div>
  )
}

export default Input
