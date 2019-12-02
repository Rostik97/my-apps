import React from 'react'
import s from "./SendHttp.module.css";
import axios from 'axios';

class ButtonSendRequest extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        const data = JSON.stringify(this.props);
        console.log(data);
        axios.post("http://localhost:8083/cloud/make/sign", data, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
            .then(res => {
                let response = res.data.sign;
                console.log(response)

            })
            .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
    };

    render() {
        return (
            <button className={s.myButton} onClick={this.handleClick}>
                SEND
            </button>
        );
    }
}

export default ButtonSendRequest;