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
    card: {
        padding: '10px !important',
    },
    item: {
        display: 'flex',
        margin: '10px 0'
    },
    itemDetail: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '10px'
    },
    imgAvatar: {
        width: '50px'
    },
    textOrder: {
        marginTop: '0',
        fontWeight: 600
    },
    more: {
        color: '#5A54F2',
        fontWeight: 600,
        textAlign: 'right',
        margin: 0
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
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.textOrder}>
                                No. de orden: {item.id}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.textOrder}>
                                Articulos comprados: {item.totalItems}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.textOrder}>
                                Total: ${item.total}.00
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.textOrder}>
                                Fecha de compra: 10 enero 2020
                            </Typography>
                            <div>
                                {
                                    item.poducts.map(item =>
                                        <div className={classes.item}>
                                            <img src={item.image} alt={item.name} className={classes.imgAvatar} />
                                            <div className={classes.itemDetail}>
                                                <Typography variant="body2" color="textSecondary" component="p" className={classes.textOrder}>
                                                    {item.name}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p" className={classes.textOrder}>
                                                    ${item.price}.00
                                            </Typography>
                                            </div>
                                        </div>

                                    )
                                }
                            </div>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.more}>
                                Ver mas >
                            </Typography>
                        </CardContent>
                    </Card>
                )
            }
            {/* <Card className={classes.root}>

                <CardContent className={classes.card}>
                    <Typography variant="h5" color="textSecondary" component="p">
                     {props.item}</strong>
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