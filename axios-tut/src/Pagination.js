import React from 'react'

function Pagination({gotoNextPage,gotoPrevPage,prevPage}) {
  return (
    <>
    {gotoPrevPage&&<button onClick={gotoPrevPage}>Previous</button>}
    {gotoNextPage&&<button onClick={gotoNextPage}>NextPage</button>}
    </>
  )
}

export default Pagination