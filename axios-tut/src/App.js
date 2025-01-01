import { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import axios from 'axios'

//just one bug ki ye cancel token wala mai bugs dikha rh ahai usko fix krna hai


function App() {
  const [pokemon,setPokemon] =useState([])
  const [currentPage,setCurrentPage]=useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPage,setNextPage]=useState()
  const [prevPage,setPrevPage]=useState()
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
      setLoading(true);
      // let cancel;
      axios.get(currentPage,
        // {cancelToken : new axios.cancelToken(c=>cancel=c)}
      ).then(res=>{ //axios always return a promise as it send the request
        setLoading(false)
        setPrevPage(res.data.previous);
        setNextPage(res.data.next);
        setPokemon(res.data.results.map(p=>p.name))
      })
      // return()=>{
      //   if(cancel){
      //     cancel();
      //   }
      // }//it cancels all the previous requests so we need to 
  },[currentPage])
  if(loading) return "page is loading ..."

  function gotoNextPage(){
    setCurrentPage(nextPage)
  }
  function gotoPrevPage(){
    setCurrentPage(prevPage)
  }
  return (
    <div className="App">
      <PokemonList pokemon={pokemon}/>
      <Pagination
       gotoNextPage={nextPage?gotoNextPage:null} 
       gotoPrevPage={prevPage?gotoPrevPage:null}/>
    </div>
  );
}

export default App;
