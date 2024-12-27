import Data from "./sections/Data";
import Dropdown from "./components/dropdown";
import List from "./components/list"

function App() {

//dropdown jisme poochega ki konsi value add krni hai phirun 4 option ke basis pr forms aa jayenge
//
//
//
//
//
//


  let resume = {
    experience : [ { year:2012, company:'xyz', role:'something' },{ year:2012, company:'xyz', role:'something' }],
    education:[ {institute:"abc",year:"2020",grade:"8.96"}],
    skills : [ 'react js', 'node js'],
    interests:['chess','coding'],
    }
  return (
    <div className="App">
      {/* <List></List> */}
     {/* <Dropdown></Dropdown> */}
     {/* <h1>Resume Builder</h1>
     <hr/>
     <Data resume={resume}/>
     <button onClick={()=>window.print()}>Print Resume</button> */}
    </div>
  );
}

export default App;
