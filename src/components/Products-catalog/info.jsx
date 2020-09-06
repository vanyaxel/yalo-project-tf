import React, { useEffect, useState } from 'react';
import useProducts  from './products';
import useStyles from './products';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const Information = () => {
    const classes = useStyles();
    const products = useProducts();

    return(
        <div>
            <ul className="wrapper">
          {products.map((item) => (
            <Card className={classes.root} key={item.id}>
              <Link to="/product-info">
              <CardMedia
                className={classes.media}
                image={item.image}
              ></CardMedia>
               </Link>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" color="primary">$ {item.price}.00</Typography>
            </Card>
          ))}
        </ul>
        </div>
    )
}

export default Information;
