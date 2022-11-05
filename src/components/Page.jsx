import React, { useEffect, useState } from 'react'

const Page = ({ p, input, search }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (p.name.toLowerCase().includes(input.toLowerCase())) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [input])

  return (
    <div>{isVisible && <div onClick={() => search(p.id)}>{p.name}</div>}</div>

    // );
  )
}

export default Page
