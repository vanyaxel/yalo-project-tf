import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '455px',
    maxHeight: '800px',
    margin: 'auto',
    boxShadow: 'none',
    padding: '11px'
  },
  media: {
    height: '150px',
    maxHeight: '250px',
    backgroundSize: 'contain',
    marginTop: '47px',
  },
  older: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#5A54F2',
  },
  price: {
    fontWeight: 'bold',
    fontSize: '15px',
    marginTop: 'none',
  },
  btnDash: {
    fontSize: '12px',
    backgroundColor: '#fffff',
    border: '1px solid #5A54F2',
    marginTop: '13px',
    marginLeft: '30%',
    color: '#5A54F2',
  }
});

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const compuMerch = `https://maranyil.github.io/compumundo/data/${id}.json`;
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
          <Typography variant="body1">{products.name}</Typography>
          <Typography variant="subtitle2"> Precio de contado: </Typography>
          <Typography className={classes.price}>$ {products.price}.00</Typography>
          <Typography  className={classes.older}>Antes: $ {products.olderPrice}.00 ||  Ahorras: $ {products.savings}.00</Typography>
          <Typography variant="body2">{products.description}</Typography>
          <Button className={classes.btnDash}><Link to='/dashboard'>volver al catálogo</Link></Button>
      </Card>
    </div>
  );
};

export default Information;
