import React, { useEffect,useState } from 'react';

import Tmdb from "./Tmdb";
import MovieRow from './components/MovieRow'
import "./App.css"
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
function App() {

  const [movieList,setMovieList]=useState([]);
  const [featuredData,setFeaturedData]=useState(null);
  const [blackHeader,setblackHeader]=useState(false);
  useEffect(()=>{
const loadAll= async()=>{
let list=await Tmdb.getHomeList();
setMovieList(list);


let originals=list.filter(i=>i.slug==='originals');
let randomChosen=Math.floor(Math.random()*(originals[0].items.results.length));
let chosen=originals[0].items.results[randomChosen];

let chosenInfo=await Tmdb.getMovieInfo(chosen.id,'tv');
// getMovieInfo
setFeaturedData(chosenInfo)


}
loadAll();
},[])

useEffect(()=>{
const scrollListener=()=>{
if(window.scrollY>10){
  setblackHeader(true);
}else{
  setblackHeader(false);

}
}
window.addEventListener('scroll',scrollListener)

return ()=>{
  window.removeEventListener('scroll',scrollListener);
}
},[])

  return (
    <div className="page">
      <Header black={blackHeader}/>
      {featuredData &&
      <FeaturedMovie item={featuredData}/>
      }
      <section className="lists">
        { movieList.map((item,key)=>(
<MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      <footer>
        Wajeeh Ayube <span role="img" aria-label="wajeeh">ayube</span>
      </footer>
      {movieList.length <= 0 &&
      <div className="loading">
        <img src="https://via.placeholder.com/150"/>      </div>
    }
    </div>
    
  );
}

export default App;
