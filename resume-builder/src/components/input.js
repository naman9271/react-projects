import React from 'react'

function Input({toSearch}) {
    function handleChange(e){
        e.preventDefault();
        let search = e.target.value;
        console.log(search);
        toSearch(search);
    }
  return (
    <div>
        <form>
            <input
            name="name"
            placeholder="Search Item"
            onChange={handleChange}
            />
        </form>
    </div>
  )
}

export default Input;