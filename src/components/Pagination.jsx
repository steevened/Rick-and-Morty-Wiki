import React from 'react'

const Pagination = ({ totalPost, postPerPage, setPageNumber, pageNumber }) => {
  let pages = []
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i)
  }

  // console.log(pages)

  return (
    <div className='bg-slate-700 text-zinc-200  h-full flex justify-center items-center pb-12'>
      <div className=' flex justify-center flex-wrap w-3/4  max-w-3xl  gap-4 '>
        {pages.map((page, index) => {
          return (
            <button
              onClick={() => setPageNumber(page)}
              key={index}
              className={`${
                page === pageNumber ? 'active' : ''
              } rounded-full h-8 w-8 hover:bg-cyan-900 transition-colors duration-300 bg-slate-800 shadow-lg shadow-slate-900 `}
            >
              {page}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Pagination
