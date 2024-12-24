import React from 'react'

export default function Experience({resume}) {
  return (
    <>
    <h2>Experience</h2>
    {resume.experience.map((data,index)=>(
      <>
      <div key ={data.company}>{data.company}</div>
      <span key ={data.role}>{data.role}</span> . <span key ={data.year}>{data.year}</span>
      </>
     ))}
    </>
  )
}
