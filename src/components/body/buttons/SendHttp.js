import React from 'react'
import s from "./SendHttp.module.css";
import axios from 'axios';
import WritePass from "../modal/FormPassword";

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

    download = (filename, text) => {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    };

    render() {
        return (
            <div>
                <button className={s.myButton} onClick={this.handleClick}>
                    SEND
                </button>
                <WritePass/>
            </div>
        );
    }
}

export default ButtonSendRequest;