import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '450px',
    maxHeight: '800px',
    margin: 'auto',
    boxShadow: 'none',
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
  btnAdd: {
    fontSize: '12px',
    backgroundColor: '#5A54F2',
    '&:hover': {
      background: '#5A54F2',
    },
    marginTop: '13px',
    marginLeft: '20%',
    color: '#ffff',
  },
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <Card className={classes.root} key={products.id}>
        <CardMedia className={classes.media} image={products.image}></CardMedia>
          <Typography variant="subtitle">{products.name}</Typography>
          <Typography variant="body1"> PRECIO DE CONTADO: </Typography>
          <Typography className={classes.price}>$ {products.price}.00</Typography>
          <Typography  className={classes.older}>Antes: $ {products.olderPrice}.00 ||  Ahorras: $ {products.savings}.00</Typography>
          <Typography variant="body2">{products.description}</Typography>
          <Button className={classes.btnAdd}>agregar producto</Button>
      </Card>
      </Dialog>
    </div>
  );
};

export default Information;
