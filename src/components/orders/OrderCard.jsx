import React from "react";
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
}