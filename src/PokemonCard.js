import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
        maxWidth: 156,
        maxHeight: 156,
        display: 'relative',
        marginTop: 15,
        marginLeft: 40,
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
    }
});

function PokemonCard(props) {
    console.log('got here')
    const classes = useStyles();
    /* name, type, num */
    /* change bg color based on type 
    if (type == 'fire') {
        color = '#FDA777'
        typeShort = 'FIR'
    }
    */
   let idstring = props.id
   let bgcolor = '#FFFFFF';
   let typeShort = '';

   if (props.type.length == 1) {
   	if (props.type === 'grass') {
      	bgcolor = '#98FF87'
      	typeShort = 'GRS'
      } else if (props.type === 'fire') {
			bgcolor = '#FDA777'
      	typeShort = 'FIR'
      } else if (props.type === 'water') {
			bgcolor = '#9DEDFF'
      	typeShort = 'WTR'
      } else if (props.type === 'electric') {
			bgcolor = '#FCFF76'
      	typeShort = 'ELC'
      } 
   }

   return <Card className={classes.root}>
      <CardActionArea>
        <div className='image-background' style={{backgroundColor: bgcolor}}>
            <CardMedia
            className={classes.media}
            image={props.image}
            title={props.name}
            />
        </div>
        <CardContent className={classes.data}>
          <div className='card-data'>
            <h4 className={classes.id}>{idstring}</h4>
            <h4 className={classes.type}>{typeShort}</h4>
          </div>
          <h3 className={classes.name}>{props.name}</h3>
        </CardContent>
      </CardActionArea>
    </Card>
}

export default PokemonCard