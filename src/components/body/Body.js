import React from 'react';
import classes from './Body.module.css'
import Button from "./button/Button";

const Body = (props) => {
    return (
        <div className={classes.content}>
            <h1>BODY</h1>
            <Button />
        </div>
    )
};
export default Body