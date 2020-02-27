import React, {useState, useEffect} from 'react';
import './App.css';
import Div100vh from 'react-div-100vh';
import PokemonCard from './PokemonCard.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Search} from '@material-ui/icons';

function App() {
  return (
    <Div100vh className='app'>
      <Header />
      <PokeList />
    </Div100vh>
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
/*
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
}*/

function PokeList() {
  const [pokedata, setPokedata] = useState([])
  useEffect(()=>{
    for(let i = 1; i < 152; i++) {
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
}

export default App;
