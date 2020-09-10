import * as React from 'react';
import {BrowserRouter , Link, Route} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import '../node_modules/antd/dist/antd.css';

export default function App(){
    return(
        <BrowserRouter>
            <Link to={"/"}>홈</Link>
            <br/>
            <Route exact path={"/"} component={LandingPage}/>
        </BrowserRouter>
    )
};