import React from 'react'
import s from "./ButtonCerts.module.css"
const ButtonCerts = () => {
    return (
        <button className={s.myButton} onClick={some}>
            GET
            CERTS
        </button>
    )};
let some = () => {
  alert("Certs generated success!!")
};
export default ButtonCerts;
