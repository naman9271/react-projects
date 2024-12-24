import React from 'react'

function Skills({resume}) {
  return (
    <div>
     <h2>Skills</h2>
     {resume.skills.map((data,index)=>(
      <>
      <div key ={index}>{data}</div>
      </>
     ))}
    </div>
  )
}

export default Skills