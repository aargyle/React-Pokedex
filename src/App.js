import React, {useState, useEffect} from 'react';
import './App.css';
import PokemonCard from './PokemonCard.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Search} from '@material-ui/icons';
import DetailView from './DetailView.js';

function App() {
  const [detailIndex, setIndex] = useState(null)
  const [pokedata, setPokedata] = useState([])
  useEffect(()=>{
    for(let i = 1; i < 10; i++) {
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
    console.log('change class')
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
        <img src='http://getdrawings.com/free-icon/pokedex-icon-55.png' alt='logo'/>
        <h2> Pokédex </h2>
      </div>
    </header>
  </div>
}

function SearchBar() {
  const [text, setText] = useState('')
  return (
  <div className='input-wrap'>
    <div className='input'>
    <TextField  fullWidth
      label="Search for Pokémon" variant="outlined" 
      value={text}
      onChange={e=> setText(e.target.value)}
    />
    </div>
    <Button variant="contained" color="primary">
      <Search />
    </Button>
  </div>
  );
}
/*
function PokeList() {
  const [pokedata, setPokedata] = useState([])
  useEffect(()=>{
    for(let i = 1; i < 10; i++) {
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

  return <div className='poke-list'>
    {pokedata.map((data, i)=> <PokemonCard key={i} name={data.name} id={data.id} type={data.types} image={data.sprites.front_default} />)}
  </div>
}*/

export default App;
