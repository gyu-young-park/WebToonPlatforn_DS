import * as React from 'react';
import {BrowserRouter , Link, Route} from "react-router-dom";
import LandingPage from './components/LandingPage/index';
import '../node_modules/antd/dist/antd.css';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.css';
export default function App(){
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path={"/"} component={LandingPage}/>
        </BrowserRouter>
    )
};