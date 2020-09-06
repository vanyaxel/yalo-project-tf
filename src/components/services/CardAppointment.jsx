import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        width: '340px',
        margin: '10px'
    },
    avatar: {
        backgroundColor: '#FF5541',
        margin: '20px'
    },
    card: {
        padding: '10px !important',
    }
}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Avatar aria-label="recipe" className={classes.avatar}>
                <DateRangeIcon />
            </Avatar>
            <CardContent className={classes.card}>
                <Typography variant="h5" color="textSecondary" component="p">
                    {props.service}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    {props.date}
                </Typography>
            </CardContent>
        </Card>
    );
}