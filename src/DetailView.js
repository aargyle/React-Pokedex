import React, {useState, useEffect} from 'react';
import pokemonGif from 'pokemon-gif';
import CloseIcon from '@material-ui/icons/Close';

function DetailView(props) {
    const [speciesData, setData] = useState([])
    useEffect(()=>{
        fetch('//pokeapi.co/api/v2/pokemon-species/' + props.id + '/')
        .then(res => res.json())
        .then(data => {
            setData(() =>{
                let category = data['genera'][2]['genus'].split(' ')[0]
                // make sure flavor text is in english
                let flavorText
                
                let i = 0
                while (data['flavor_text_entries'][i]['language']['name'] !== 'en') {
                    i++;
                }

                flavorText = data['flavor_text_entries'][i]['flavor_text']
                flavorText = flavorText.replace( /[\r\n]+/gm, " " );
                return [flavorText, category]
            })
        })
        .catch(err => console.log(err));
      }, [props.id])
    
    //capitalize stats
    let type
    if (props.types.length < 2) {
        type = props.types[0]['type']['name']
        type = type.charAt(0).toUpperCase() + type.substring(1)
    } else {
        let type1 = props.types[1]['type']['name']
        type1 = type1.charAt(0).toUpperCase() + type1.substring(1)
        let type2 = props.types[0]['type']['name']
        type2 = type2.charAt(0).toUpperCase() + type2.substring(1)
        type = type1 + '/' + type2
    }
    let name = props.name.charAt(0).toUpperCase() + props.name.substring(1)

    //height in decimeters
    let height = props.height / 3.048
    height = height.toFixed(2) + ' ft'
    
    //weight in hectograms
    let weight = props.weight / 4.536
    weight = weight.toFixed(2) + ' lbs'

    let gifURL
    if (props.name === 'nidoran-f') {
        name = 'Nidoran-F'
        gifURL = pokemonGif(29)
    } else if (props.name === 'nidoran-m') {
        name = 'Nidoran-M'
        gifURL = pokemonGif(32)
    } else {
        gifURL = pokemonGif(props.name)
    }

    return <div className={props.className}>
        <div className='upper-details'>
            <div className='detail-image'>
                <img src={gifURL} alt='animated gif of pokemon' />
            </div>
            <div className='stats'>
                <div className='line'>
                    <h5>Name:</h5><h5 className='stats-details'>{name}</h5>
                </div>
                <div className='line'>
                    <h5>Type:</h5><h5 className='stats-details'>{type}</h5>
                </div>
                <div className='line'>
                    <h5>Category:</h5><h5 className='stats-details'>{speciesData[1]}</h5>
                </div>
                <div className='line'>
                    <h5>Height:</h5><h5 className='stats-details'>{height}</h5>
                </div>
                <div className='line'>
                    <h5>Weight:</h5><h5 className='stats-details'>{weight}</h5>
                </div>
            </div>
            <div className='close' onClick={() => props.onClick()}><CloseIcon /></div>
        </div>
        <div className='flavor-text'>
            <p>{speciesData[0]}</p>
        </div>
    </div>
}

export default DetailView