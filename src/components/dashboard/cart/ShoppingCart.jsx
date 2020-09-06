import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Btn from "../btn/Btn";
import ProductsCart from './ProductsCart';

const useStyles = makeStyles((theme) => ({
    button: {
        display: "block",
        marginTop: theme.spacing(2)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    }
}));

const ShoppingCart = ({ productAdded, setProductAdded }) => {

    const classes = useStyles();
    const [service, setService] = React.useState(1);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setService(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const totalPrice = productAdded.products.reduce((acc, curr) => acc + curr.price, 0);

    const numItems = productAdded.products.length;

    console.log('cart', productAdded);
    return (
        <div>
            <Typography variant="h1" color="initial">Carrito de compras</Typography>
            <Typography variant="body1" color="initial">Subtotal {numItems} productos ${totalPrice}.00</Typography>
            <Typography variant="body1" color="initial">Costo del envión estandar: $120.00</Typography>
            <Typography variant="body1" color="initial"><strong>Subtotal: ${totalPrice + 120}.00</strong></Typography>

            <Btn title='Proceder al pago' />
            {
                productAdded.products.map(item =>
                    <div>
                        <ProductsCart item={item} productAdded={productAdded} setProductAdded={setProductAdded} />
                    </div>
                )
            }
        </div>
    );
};

export default ShoppingCart;