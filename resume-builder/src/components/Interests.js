import React from 'react'

function Interests({resume}) {
  return (
    <div>
     <h2>Interests</h2>
     {resume.interests.map((data,index)=>(
      <>
      <div key={index}>{data}</div>
      </>
     ))}
    </div>
  )
}

export default Interests;