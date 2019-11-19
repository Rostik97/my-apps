import React from 'react';
import classes from './Body.module.css'
import ButtonCerts from "./buttons/ButtonCerts";
import ButtonSign from "./buttons/ButtonSign";
import {Link} from "react-router-dom";

const Body = (props) => {
    return (
        <div className={classes.content}>
            <Link to="/cert">
                <ButtonCerts/>
            </Link>
            <Link to="file">
                <ButtonSign/>
            </Link>
        </div>
    )
};
export default Body