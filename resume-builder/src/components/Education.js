import React from 'react'

export default function Education({resume}) {
  return (
    <div>
     <h2>Education</h2>
     {resume.education.map((data,index)=>(
      <>
      <div key ={index}>{data}</div>
      </>
     ))}
    </div>
  )
}
