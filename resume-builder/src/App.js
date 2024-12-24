import Education from "./components/Education";
import Experience from "./components/Experience";
import Interests from "./components/Interests";
import Skills from "./components/Skills";

function App() {

  let resume = {
    experience : [ { year:2012, company:'xyz', role:'something' },{ year:2012, company:'xyz', role:'something' }],
    education:[ ],
    skills : [ 'react js', 'node js'],
    interests:[],
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

    </div>
  );
}

export default App;
