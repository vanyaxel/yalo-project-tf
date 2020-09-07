import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '350px',
    maxHeight: '500px',
    margin: 'auto',
    boxShadow: 'none',
  },
  media: {
    height: '150px',
    backgroundSize: 'contain',
    marginTop: '47px',
  },
  price: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#5A54F2',
  },
  older: {
    fontSize: '12px',
    marginTop: 'none',
  },
  btnAdd: {
    fontSize: '12px',
    backgroundColor: '#5A54F2',
    '&:hover': {
      background: '#5A54F2',
    },
    color: '#ffff',
  },
});

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const compuMerch = `https://api.sheety.co/b032d050fe95c4bd74ce568d32973258/hojaProductos/stock/${id}`;
    fetch(compuMerch)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.stock);
      });
  }, []);
  return products;
};

const Information = () => {
  const products = useProducts();
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} key={products.id}>
        <CardMedia className={classes.media} image={products.image}></CardMedia>
          <Typography variant="subtitle">{products.name}</Typography>
          <Typography className={classes.price}>$ {products.price}.00</Typography>
          <Typography  className={classes.older}>Antes: $ {products.olderPrice}.00</Typography>
          <Typography variant="body2">{products.description}</Typography>
          <Button className={classes.btnAdd}>agregar producto</Button>
      </Card>
    </div>
  );
};

export default Information;
