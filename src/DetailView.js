import React, {useState} from 'react';
import pokemonGif from 'pokemon-gif';
//https://pokeapi.co/api/v2/pokemon-species/1/
//flavor_text
function DetailView(props) {
    const [flavorText, setText] = useState('')
    //let flavorText = ''
    fetch('http://pokeapi.co/api/v2/pokemon-species/' + props.id + '/')
        .then(res => res.json())
        .then(data => {
            setText(current=>{
                let flavorText = data['flavor_text_entries'][1]['flavor_text']
                flavorText = flavorText.replace( /[\r\n]+/gm, "" );
                return flavorText
            })
        })
        .catch(err => console.log(err));
    
    //capitalize stats
    //let type = props.type[0]['type']['name']
    //type = type.charAt(0).toUpperCase() + type.substring(1)
    //let name = props.name.charAt(0).toUpperCase() + props.name.substring(1)
    //let category = props.category.charAt(0).toUpperCase() + category.substring(1)

    //height in decimeters
    //weight in hectograms
    let gifURL = pokemonGif(props.name)

    return <div className='detail-card'>
        <div className='upper-details'>
            <div className='detail-image'>
                <img src={gifURL} />
            </div>
            <div className='stats'>
                <div className='line'>
                    <h5>Name:</h5><h5 className='stats-details'>{props.name}</h5>
                </div>
                <div className='line'>
                    <h5>Type:</h5><h5 className='stats-details'>{props.type}</h5>
                </div>
                <div className='line'>
                    <h5>Category:</h5><h5 className='stats-details'>{props.category}</h5>
                </div>
                <div className='line'>
                    <h5>Height:</h5><h5 className='stats-details'>{props.height}</h5>
                </div>
                <div className='line'>
                    <h5>Weight:</h5><h5 className='stats-details'>{props.weight}</h5>
                </div>
            </div>
        </div>
        <div className='flavor-text'>
            <p>{flavorText}</p>
        </div>
    </div>
}

export default DetailView