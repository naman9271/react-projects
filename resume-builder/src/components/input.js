import React from 'react'

function Input() {
    function handleChange(e){
        e.preventDefault();
        
    }
  return (
    <div>
        <form>
            <input
            name="name"
            value=""
            placeholder="Search Item"
            onChange={handleChange}
            />
        </form>
    </div>
  )
}

export default Input;