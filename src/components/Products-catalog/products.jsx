import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './products.css';

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
      'https://api.sheety.co/08037a6e719e10abd51ee7fe17bba593/compuHiperMegaRed/stock';
    fetch(compuMerch)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.stock);
      });
  }, []);
  return products;
};

const Products = ({ productAdded, setProductAdded }) => {
  const products = useProducts();
  const classes = useStyles();

  const handleAddProduct = item => {
    setProductAdded({ ...productAdded, products: [...productAdded.products, item] });
  };

  console.log('algo', productAdded);

  return (
    <div>
      hola
      <div>
        <p> C: </p>
        <ul className="wrapper">
          {products.map((item) => (
            <Card className={classes.root} key={item.id}>
              <CardMedia
                className={classes.media}
                image={item.image}
              ></CardMedia>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" color="primary">$ {item.price}.00</Typography>
              <Button variant="contained" color="primary" onClick={() => { handleAddProduct(item); }}>
                agregar producto
                </Button>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;