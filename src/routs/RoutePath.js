import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from "../App";
import FileZoneUpLoad from "../components/body/upload/FileZoneUpLoad";

const routing = (
        <Router>
            <Route path="/" component={App}/>
            <Route path="/file" render={() => <FileZoneUpLoad />}/>
        </Router>
);
export default routing;