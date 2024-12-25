import Education from "./components/Education";
import Experience from "./components/Experience";
import Interests from "./components/Interests";
import Skills from "./components/Skills";

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
     <h1>Resume Builder</h1>
     <hr/>
     <Experience resume={resume}/>
     <hr/>
     <Education resume={resume}/>
     <hr/>
     <Skills resume={resume}/>
     <hr/>
     <Interests resume={resume}/>
     <hr/>
     <button onClick={()=>window.print()}>Print Resume</button>
    </div>
  );
}

export default App;
