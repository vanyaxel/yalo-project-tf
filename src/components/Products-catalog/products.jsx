import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './products.css'

const useStyles = makeStyles({
  root: {
    maxWidth: '300px',
    maxHeight: '300px',
    marginBottom: '25px',
    boxShadow: 'none',
  },
  media: {
    height: '200px',
    backgroundSize: 'contain'
  },
});

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const compuMerch =
      'https://v2-api.sheety.co/8a2deb1e9cc04072f56f8664c485e58e/compumundoApi/hoja1';
    fetch(compuMerch)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.hoja1);
      });
  }, []);
  return products;
};

const Products = () => {
  const products = useProducts();
  const classes = useStyles();

  return (
    <div>
      <p> C: </p>
      CompuMundoHiperMegaRed
      <ul className="wrapper">
          {products.map((item) => (
            <Card className={classes.root} key={item.id}>
              <CardMedia
                className={classes.media}
                image={item.image}
              ></CardMedia>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" color="primary">$ {item.price}.00</Typography>
            </Card>
          ))}
        
      </ul>
    </div>
  );
};

export default Products;
