import React from 'react'

export default function Education({resume}) {
  return (
    <div>
     <h2>Education</h2>
     {resume.education.map((data,index)=>(
      <>
      <div key ={data.institute}>{data.institute}</div>
      <span key ={data.grade}>{data.grade}</span> . <span key ={data.year}>{data.year}</span>
      </>
     ))}
    </div>
  )
}
