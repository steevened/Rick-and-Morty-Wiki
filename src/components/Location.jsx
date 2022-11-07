import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Resident from './Resident'
import Page from './Page'
import LocationInfo from './LocationInfo'
import Input from './Input'
import Pagination from './Pagination'

function Location() {
  const [location, setlocation] = useState({})
  const [page, setPage] = useState(1)
  const [pageNumber, setPageNumber] = useState(1)
  const [residents, setResidents] = useState([])
  const [postPerPage, setPostPerPage] = useState(8)

  const random = Math.floor(Math.random() * 126) + 1

  let api = `https://rickandmortyapi.com/api/location/${random}?page=${page}`

  useEffect(() => {
    axios.get(`${api}/`).then((res) => {
      setResidents(res.data.residents)
      setlocation(res.data)
    })
    axios
      .get(`https://rickandmortyapi.com/api/location/?page=${page}`)
      .then((res) => setPage(res.data.results))
  }, [])

  const search = (e) => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${e}?page=${page}`)
      .then((res) => setlocation(res.data))
  }

  const lastPostIndex = pageNumber * postPerPage
  const firsPostIndex = lastPostIndex - postPerPage
  const currentPost = location.residents?.slice(firsPostIndex, lastPostIndex)

  // console.log(currentPost)

  return (
    <>
      <LocationInfo location={location} residents={residents} />
      <Input page={page} search={search} />

      <div className='mt-3 bg-slate-700 flex justify-center'>
        <ul className=' py-6 sm:grid sm:grid-cols-2 md:grid-cols-3 max-w-5xl '>
          {currentPost?.map((resident) => (
            <Resident key={resident} url={resident} />
          ))}
        </ul>
      </div>
      <Pagination
        totalPost={location?.residents?.length}
        postPerPage={postPerPage}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </>
  )
}

export default Location
