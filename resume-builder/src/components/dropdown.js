import React, { useState } from 'react'

function Dropdown() {
  const  nations  = [
    { name:  'India', value:  'IN' },
    { name:  'Pak', value:  'PK' },
    { name:  'Bangladesh', value:  'BG' },
    ] 

    const [newNations ,setNewNations] = useState({ name: '', value: '' });
    const [newDropdown,setNewDropdown]=useState(nations)

    function handleChange(e){
      e.preventDefault();
      console.log(e.target.value);
    }
    function handleInput(e){
      const { title, value } = e.target;
      setNewNations((prev) => ({ ...prev, [title]: value }));
    }
    function handleSubmit(e){
      e.preventDefault();
      if(newNations.name && newNations.value ){
        setNewDropdown([...newDropdown,newNations]);
        setNewNations({ name: '', value: '' });
      }else{
        alert("enter both values")
      }
    }
  return (
    <div>
      <form >
        <input title="name" placeholder="Enter the Nation" type="text" name="name" value={newNations.name} onChange={handleInput}/>
        <input title="value" placeholder="Enter the value" type="text" name="value" value={newNations.value} onChange={handleInput}/>
        <button onClick={handleSubmit}>Add to Dropdown</button>
        <br/><br/><br/>
        <select id="nations" name="nations" onChange={handleChange}>
          {newDropdown.map((data,index)=>(
            <option key={index} value={data.value}>{data.name}</option>
          ))}
        </select>

      </form>
    </div>
  )
}

export default Dropdown