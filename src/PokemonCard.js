import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
        width: 156,
        height: 156,
		marginBottom: 10,
    },
    media: {
        height: 100,
    },
    data: {
        fontFamily: 'Sansation',
        height: 56,
        padding: 0,
    },
    id: {
        margin: 5,
    },
    type: {
        margin: 5,
    },
    name: {
        fontFamily: 'Sansation',
        fontSize: 18,
        fontWeight: 'normal',
	 },
	 img: {
		 height: 100,
		 width: 100,
	 }
});

function PokemonCard(props) {
    const classes = useStyles();
	
	// add formatting to id
	let idstring = props.id
	if (props.id < 10) {
		idstring = '#00' + props.id
	} else if (props.id > 9 && props.id < 100) {
		idstring = '#0' + props.id
	} else {
		idstring = '#' + props.id
	}

	// capitalize first letter of name
	let name = props.name
	if (props.name === 'nidoran-f') {
		name = 'Nidoran-F'
  } else if (props.name === 'nidoran-m') {
		name = 'Nidoran-M'
  } else {
		name = name.charAt(0).toUpperCase() + name.substring(1)
  }

	// change background color and abbreviate type
	let bgcolor = '#FFFFFF';
    let typeShort = '';
	let type = props.type[0]['type']['name'] //could just use the second elements in array, then get rid of first if statement
	
	if (type === 'grass') {
		bgcolor = '#98FF87'
		typeShort = 'GRS'
	} else if (type === 'fire') {
		bgcolor = '#FDA777'
		typeShort = 'FIR'
	} else if (type === 'water') {
		bgcolor = '#9DEDFF'
		typeShort = 'WTR'
	} else if (type === 'normal') {
		bgcolor = '#D3C969'
		typeShort = 'NRM'
	} else if (type === 'ice') {
		bgcolor = '#B9F6F6'
		typeShort = 'ICE'
	} else if (type === 'bug') {
		bgcolor = '#CADC33'
		typeShort = 'BUG'
	} else if (type === 'fighting') {
		bgcolor = '#EA5850'
		typeShort = 'FGT'
	} else if (type === 'flying') {
		bgcolor = '#CBBEF1'
		typeShort = 'FLY'
	} else if (type === 'poison') {
		bgcolor = '#DD78DD'
		typeShort = 'PSN'
	} else if (type === 'ground') {
		bgcolor = '#EFD58B'
		typeShort = 'GRD'
	} else if (type === 'psychic') {
		bgcolor = '#FFA3BE'
		typeShort = 'PSY'
	} else if (type === 'rock') {
		bgcolor = '#DDB400'
		typeShort = 'RCK'
	} else if (type === 'ghost') {
		bgcolor = '#9473CA'
		typeShort = 'GHT'
	} else if (type === 'dragon') {
		bgcolor = '#7038F8'
		typeShort = 'DRG'
	} else if (type === 'dark') {
		bgcolor = '#8F8F8F'
		typeShort = 'DRK'
	} else if (type === 'steel') {
		bgcolor = '#B8B8D0'
		typeShort = 'STL'
	} else if (type === 'fairy') {
		bgcolor = '#FF9EF5'
		typeShort = 'FRY'
	} else if (type === 'electric') {
		bgcolor = '#FCFF76'
		typeShort = 'ELC'
	}
	
	// If Pokemon has two types, use a gradient for background, and change abbreviation
	if (props.type.length === 2) {
		type = props.type[1]['type']['name']
		if (type === 'grass') {
			bgcolor = 'linear-gradient(145deg, #98FF87 30%, ' + bgcolor + ' 70%)'
			typeShort = 'GRS/' + typeShort
		} else if (type === 'fire') {
			bgcolor = 'linear-gradient(145deg, #FDA777 30%, ' + bgcolor + ' 70%)'
			typeShort = 'FIR/' + typeShort
		} else if (type === 'water') {
			bgcolor = 'linear-gradient(145deg, #9DEDFF 30%, ' + bgcolor + ' 70%)'
			typeShort = 'WTR/' + typeShort
		} else if (type === 'normal') {
			bgcolor = 'linear-gradient(145deg, #D3C969 30%, ' + bgcolor + ' 70%)'
			typeShort = 'NRM/' + typeShort
		} else if (type === 'ice') {
			bgcolor = 'linear-gradient(145deg, #B9F6F6 30%, ' + bgcolor + ' 70%)'
			typeShort = 'ICE/' + typeShort
		} else if (type === 'bug') {
			bgcolor = 'linear-gradient(145deg, #CADC33 30%, ' + bgcolor + ' 70%)'
			typeShort = 'BUG/' + typeShort
		} else if (type === 'fighting') {
			bgcolor = 'linear-gradient(145deg, #EA5850 30%, ' + bgcolor + ' 70%)'
			typeShort = 'FGT/' + typeShort
		} else if (type === 'flying') {
			bgcolor = 'linear-gradient(145deg, #CBBEF1 30%, ' + bgcolor + ' 70%)'
			typeShort = 'FLY/' + typeShort
		} else if (type === 'poison') {
			bgcolor = 'linear-gradient(145deg, #DD78DD 30%, ' + bgcolor + ' 70%)'
			typeShort = 'PSN/' + typeShort
		} else if (type === 'ground') {
			bgcolor = 'linear-gradient(145deg, #EFD58B 30%, ' + bgcolor + ' 70%)'
			typeShort = 'GRD/' + typeShort
		} else if (type === 'psychic') {
			bgcolor = 'linear-gradient(145deg, #FFA3BE 30%, ' + bgcolor + ' 70%)'
			typeShort = 'PSY/' + typeShort
		} else if (type === 'rock') {
			bgcolor = 'linear-gradient(145deg, #DDB400 30%, ' + bgcolor + ' 70%)'
			typeShort = 'RCK/' + typeShort
		} else if (type === 'ghost') {
			bgcolor = 'linear-gradient(145deg, #9473CA 30%, ' + bgcolor + ' 70%)'
			typeShort = 'GHT/' + typeShort
		} else if (type === 'dragon') {
			bgcolor = 'linear-gradient(145deg, #7038F8 30%, ' + bgcolor + ' 70%)'
			typeShort = 'DRG/' + typeShort
		} else if (type === 'dark') {
			bgcolor = 'linear-gradient(145deg, #8F8F8F 30%, ' + bgcolor + ' 70%)'
			typeShort = 'DRK/' + typeShort
		} else if (type === 'steel') {
			bgcolor = 'linear-gradient(145deg, #B8B8D0 30%, ' + bgcolor + ' 70%)'
			typeShort = 'STL/' + typeShort
		} else if (type === 'steel') {
			bgcolor = 'linear-gradient(145deg, #FF9EF5 30%, ' + bgcolor + ' 70%)'
			typeShort = 'FRY/' + typeShort
		} else if (type === 'electric') {
			bgcolor = 'linear-gradient(145deg, #FCFF76 30%, ' + bgcolor + ' 70%)'
			typeShort = 'ELC/' + typeShort
		}
	}

   return <Card className={classes.root}>
      <CardActionArea onClick={() => props.onClick(props.id)}>
        <div className={classes.media} style={{background: bgcolor}}>
			  <img src={props.image} alt={name} className={classes.img} />
        </div>
        <CardContent className={classes.data}>
          <div className='card-data'>
            <h4 className={classes.id}>{idstring}</h4>
            <h4 className={classes.type}>{typeShort}</h4>
          </div>
          <h3 className={classes.name}>{name}</h3>
        </CardContent>
      </CardActionArea>
    </Card>
}

export default PokemonCard