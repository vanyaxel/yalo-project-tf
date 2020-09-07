import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  { Link } from 'react-router-dom';
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
    height: '100px',
    backgroundSize: 'contain'
  },
  price: {
    fontSize: '15px',
    fontWeight: 600,
    color: '#5A54F2',
  },
  btnAdd: {
    fontSize: '12px',
    backgroundColor: '#5A54F2',
    '&:hover': {
      background: "#5A54F2",
    },
    color: '#ffff',
  }
});

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const compuMerch = 'https://api.sheety.co/b032d050fe95c4bd74ce568d32973258/hojaProductos/stock';
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
      <ul className="wrapper">
        {products.map((item) => (
          <Card className={classes.root} key={item.id}>
            <Link to={`/product-info/${item.id}`}>
            <CardMedia
              className={classes.media}
              image={item.image}
            ></CardMedia>
            <Typography variant="body2">{item.name}</Typography>
            <Typography className={classes.price}>$ {item.price}.00</Typography>
            </Link>
            <Button onClick={() => { handleAddProduct(item); }} className={classes.btnAdd}>
              agregar producto
                </Button>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default Products;