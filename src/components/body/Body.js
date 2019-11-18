import React from 'react';
import classes from './Body.module.css'
import ButtonCerts from "./buttons/ButtonCerts";
import ButtonSign from "./buttons/ButtonSign";

const Body = (props) => {
    return (
        <div className={classes.content}>
            {/*<h1>BODY</h1>*/}
            <ButtonCerts />
            <ButtonSign />
        </div>
    )
};
export default Body