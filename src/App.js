import React, {useState, useEffect} from 'react';
import './App.css';
import PokemonCard from './PokemonCard.js';
import DetailView from './DetailView.js';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

// custom styles for TextField
const StyledTextField = styled(TextField)`
  label {
    color: white;
    font-family: 'Sansation'
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: white;
      border-radius: 130px;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
  span {
    color: white;
  }
  span.focused {
    color: white;
  }
  input {
    color: white;
  }
  label.Mui-focused{
    color: white;
  }
`;

function App() {
  const [detailIndex, setIndex] = useState(null)
  const [text, setText] = useState('')
  const [pokedata, setPokedata] = useState([])
  const [tempdata, setTempdata] = useState([])
  
  useEffect(()=>{
    for(let i = 1; i < 101; i++) {
      fetch('https://pokeapi.co/api/v2/pokemon/' + i + '/')
        .then(res => res.json())
        .then(data => {
          setPokedata(current=>{
            const sortedData = [...current, data]
            sortedData.sort((a,b)=> a.id-b.id)
            return sortedData
          })
          setTempdata(current=>{
            const sortedData = [...current, data]
            sortedData.sort((a,b)=> a.id-b.id)
            return sortedData
          })
        })
        .catch(err => console.log(err));
    }
  }, [])

  function searchClick(res) {
    setText(res)
    console.log('query: ' + res)
    function filterItems(arr, query) {
      return arr.filter(function(el) {
          let name = el.name
          return name.toLowerCase().indexOf(query.toLowerCase()) !== -1
      })
    }
    const filteredItems = filterItems(pokedata, res)
    if (filteredItems.length > 0) {
      setTempdata(filterItems(pokedata, res))
    }
  }

  let details = {}
  let showDetails = false
  if (detailIndex || detailIndex === 0) {
    details = tempdata[detailIndex]
    showDetails = true
  }

  let pokeClass = 'poke-list'
  let detailClass = 'detail-card'
  let isMobile = false
  if (window.innerWidth < 768) {
    isMobile = true
  }
  
  // change classname conditionally
  if (showDetails && !isMobile) {
    pokeClass = 'poke-list-detail'
  }

  // change class of DetailView if mobile screen 
  if (showDetails && isMobile) {
    console.log('Switching to mobile')
    detailClass = 'detail-card-mobile'
  }

  return (
    <div className='app'>
      <Header />
      <div className='search-wrapper'>
        <StyledTextField  fullWidth
          label="Search Pokémon" variant="outlined" 
          value={text} color='primary'
          onChange={e=> searchClick(e.target.value)}
        />
      </div>
      <div className={pokeClass}>
        {tempdata.map((data, i)=> <PokemonCard onClick={() => setIndex(i)} key={i} name={data.name} id={data.id} type={data.types} image={data.sprites.front_default} />)}
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

export default App;
