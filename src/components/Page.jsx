import React, { useEffect, useState } from 'react'

const Page = ({ p, input, search, isVisible, setIsVisible, setInput }) => {
  useEffect(() => {
    if (p.name.toLowerCase().includes(input.toLowerCase())) {
      setIsVisible(true)
    } else {
      setIsVisible(!isVisible)
    }
  }, [input])

  return (
    <div>
      {isVisible && (
        <div
          className='border-b border-slate-200 cursor-pointer'
          onClick={() => {
            setIsVisible(false)
            search(p.id)
            setInput('')
          }}
        >
          {p.name}
        </div>
      )}
    </div>

    // );
  )
}

export default Page
