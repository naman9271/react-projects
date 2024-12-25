import React from 'react'

export default function Education({resume}) {
  return (
    <div>
      <h2>Experience</h2>
     {resume.experience.map((data,index)=>(
       <>
       <div key ={data.company}>{data.company}</div>
       <span key ={data.role}>{data.role}</span> . <span key ={data.year}>{data.year}</span>
       </>
      ))}
     <hr/>
     <h2>Education</h2>
     {resume.education.map((data,index)=>(
      <>
      <div key ={data.institute}>{data.institute}</div>
      <span key ={data.grade}>{data.grade}</span> . <span key ={data.year}>{data.year}</span>
      </>
     ))}
     <hr/>
     <h2>Interests</h2>
     {resume.interests.map((data,index)=>(
      <>
      <div key={index}>{data}</div>
      </>
     ))}
     <hr/>
     <h2>Skills</h2>
     {resume.skills && resume.skills.length>0 ? 
     resume.skills.map((data,index)=>(
      <div key ={index}>{data}</div>
     )):
     <div>
     {"no skills"}
     </div>
     }
     
     {/* {resume.skills.map((data,index)=>(
      <>
      <div key ={index}>{data}</div>
      </>
     ))} */}
    </div>
  )
}
