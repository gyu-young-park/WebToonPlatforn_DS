import * as React from 'react';
import {BrowserRouter , Link, Route} from "react-router-dom";
import LandingPage from './components/Landing'
import '../node_modules/antd/dist/antd.css';
import Header from "./components/Header";
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css'
export default function App(){
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path={"/"} component={LandingPage}/>
            <Footer/>
        </BrowserRouter>
    )
};