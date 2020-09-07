/* import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';


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
    },
    detailBtn: {
        color: '#5A54F2',
        fontSize: '14px',
        fontWeight: 600,
        textAlign: 'right'
    }
}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Avatar aria-label="recipe" className={classes.avatar}>
                <img src={props.image} alt={props.imagesName} className={classes.imgAvatar} />
            </Avatar>
            <CardContent className={classes.card}>
                <Typography variant="h5" color="textSecondary" component="p">
                    <strong> {props.item}</strong>
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    {props.date}
                </Typography>
                <Typography className={classes.detailBtn}>
                    Ver más >
                </Typography>
            </CardContent>
        </Card>
    );
} */


import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import { db } from '../../firebaseConfig';

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
    },
    detailBtn: {
        color: '#5A54F2',
        fontSize: '14px',
        fontWeight: 600,
        textAlign: 'right'
    }
}));


const useOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        db
            .collection('orders')
            .onSnapshot((snapshot) => {
                const newOrder = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setAllOrders(newOrder);
            });
    }, []);
    return allOrders;
};

export default function RecipeReviewCard(props) {

    const classes = useStyles();

    const orders = useOrders();

    console.log(orders);

    return (
        <>
            {
                orders.map(item =>
                    <Card className={classes.root}>
                        <CardContent className={classes.card}>
                            <Typography variant="h5" color="textSecondary" component="p">
                                Numero de orden: <strong> {item.id}</strong>
                            </Typography>
                            <Typography variant="h5" color="textSecondary" component="p">
                                Articulos comprados: <strong> {item.totalItems}</strong>
                            </Typography>
                            <Typography variant="h5" color="textSecondary" component="p">
                                Total: <strong> ${item.total}.00</strong>
                            </Typography>
                            <Typography variant="h5" color="textSecondary" component="p">
                                Fecha de compra: <strong> 10 enero 2020</strong>
                            </Typography>
                            <div>
                                {
                                    item.poducts.map(item =>
                                        <div>
                                            <img src={item.image} alt={item.name} />
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {item.price}
                                            </Typography>
                                        </div>

                                    )
                                }
                            </div>
                        </CardContent>
                    </Card>
                )
            }
            {/* <Card className={classes.root}>

                <CardContent className={classes.card}>
                    <Typography variant="h5" color="textSecondary" component="p">
                        <strong> {props.item}</strong>
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {props.date}
                    </Typography>
                    <Typography className={classes.detailBtn}>
                        Ver más >
                </Typography>
                </CardContent>
            </Card> */}
        </>
    );
}