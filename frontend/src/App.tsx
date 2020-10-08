import * as React from 'react';
import {BrowserRouter , Route} from "react-router-dom";
import LandingPage from './components/Landing'
import selfToImagePage from "./pages/selfToImagePage";
import '../node_modules/antd/dist/antd.css';
import Header from "./components/Header";
import Footer from './components/Footer'
import webtoonPage from './pages/webtoon'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
export default function App(){
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path={"/"} component={LandingPage}/>
            <Route exact path={"/self2image"} component={selfToImagePage}/>
            <Route exact path={"/webtoon"} component={webtoonPage}/>
            <Footer/>
        </BrowserRouter>
    )
};