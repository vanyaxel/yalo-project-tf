import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        display: "flex",
        alignItems: "center",
        margin: '10px'
    },
    avatar: {
        backgroundColor: '#ffff',
        margin: '20px',
        width: theme.spacing(7),
        height: theme.spacing(7)
    },
    card: {
        padding: '10px !important',
    },
    imgAvatar: {
        width: '50px'
    }
}));

export default function ProductsCart({ item, productAdded, setProductAdded }) {
    const classes = useStyles();

    const [service, setService] = React.useState(1);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event, item) => {

        setService(event.target.value);
        /* 
                if (productAdded.products.find(product => product.id === item.id)) {
                    const products = productAdded.products
                        .map(product => product.id === item.id ? { ...product, quantity } : product);
                    setProductAdded({
                        ...productAdded, products
                    });
                } */
        if (productAdded.products.find(product => product.id === item.id)) {
            const products = productAdded.products
                .map(product => product.id === item.id && { ...product, quantity: service });
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const deleteOrder = (id) => {
        console.log(id);
        let newArrProducts = productAdded.products.filter(products => products.id !== id);
        setProductAdded({ ...productAdded, products: newArrProducts });
    };

    return (
        <Card className={classes.root}>
            <Avatar aria-label="recipe" className={classes.avatar}>
                <img src={item.image} alt={item.name} className={classes.imgAvatar} />
            </Avatar>
            <CardContent className={classes.card}>
                <Typography variant="h5" color="textSecondary" component="p">
                    {item.name}
                </Typography>
                <Typography variant="h5" color="textSecondary" component="p">
                    {item.price}
                </Typography>
                <Typography variant="h5" color="textSecondary" component="p">
                    {item.category}
                </Typography>
            </CardContent>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Cantidad</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={service}
                    onChange={e => { handleChange(e, item); }}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                </Select>
            </FormControl>
            <Button variant="text" color="secondary" onClick={() => { deleteOrder(item.id); }}>
                eliminar producto
            </Button>
        </Card>
    );
}