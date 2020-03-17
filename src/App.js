import React, {useState, useEffect} from 'react';
import './App.css';
import PokemonCard from './PokemonCard.js';
import DetailView from './DetailView.js';
import { Input } from 'antd';
const { Search } = Input;

function App() {
  const [detailIndex, setIndex] = useState(null)
  const [pokedata, setPokedata] = useState([])
  useEffect(()=>{
    for(let i = 1; i < 50; i++) {
      fetch('http://pokeapi.co/api/v2/pokemon/' + i + '/')
        .then(res => res.json())
        .then(data => {
          setPokedata(current=>{
            const sortedData = [...current, data]
            sortedData.sort((a,b)=> a.id-b.id)
            return sortedData
          })
        })
        .catch(err => console.log(err));
    }
  }, [])

  let details = {}
  let showDetails = false
  if (detailIndex || detailIndex === 0) {
    details = pokedata[detailIndex]
    showDetails = true
  }

  let pokeClass = 'poke-list'
  let detailClass = 'detail-card'
  let isMobile = false
  if (window.innerWidth < 600) {
    isMobile = true
  }
  // change pokelist CSS if detailview there
  // style={{width: showDetails ? 'calc(100vw - 300px)': '100vw'}
  // change classname conditionally
  if (showDetails && !isMobile) {
    pokeClass = 'poke-list-detail'
  }

  // change CSS if mobile screen 
  // window.innerWidth < 600
  if (showDetails && isMobile) {
    console.log('Switching to mobile')
    detailClass = 'detail-card-mobile'
  }

  return (
    <div className='app'>
      <Header />
      <div className={pokeClass}>
        {pokedata.map((data, i)=> <PokemonCard onClick={() => setIndex(i)} key={i} name={data.name} id={data.id} type={data.types} image={data.sprites.front_default} />)}
      </div>
      {showDetails && <DetailView className={detailClass} onClick={() => setIndex(null)} {...details} />}
    </div>
  );
}

function Header() {
  return <div className='header-wrapper'>
    <header>
      <div style={{display:'flex', alignItems:'center'}}>
        <img src='http://getdrawings.com/free-icon/pokedex-icon-55.png' alt='logo' onClick={() => window.scrollTo(0, 0)}/>
        <h2 onClick={() => window.scrollTo(0, 0)}> Pokédex </h2>
      </div>
    </header>
  </div>
}

function SearchBar() {
  const [text, setText] = useState('')
  return (
  <div className='input-wrap'>
    <Search
      placeholder="Search Pokémon"
      onSearch={value => console.log(value)}
      style={{ width: '40%' }}
    />
  </div>
  );
}

export default App;
