import React, {useEffect , useState} from 'react';
import {Route, withRouter ,BrowserRouter, Switch} from "react-router-dom";
import LandingPage from './components/Landing'
import selfToImagePage from "./pages/selfToImagePage";
import '../node_modules/antd/dist/antd.css';
import Header from "./components/Header";
import Footer from './components/Footer'
import webtoonPage from './pages/webtoon'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import WebtoonSpecificPage from './pages/webtoonSpecificPage'
import WebtoonImagePage from './pages/webtoonImagePage'
import AuthorAdminPage from './pages/authorAdminPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import Auth from './hoc/auth'
import {useSelector} from 'react-redux'
import {RootState} from './_reducers/index'

// Auth(comp, option, isAdmin)
// option 은 3가지 경우
// null : 아무나 출입가능
// true : 로그인한 유저만 출입 가능한 페이지
// false : 로그인한 유저는 출입 불가능한 페이지
const App = () => {
    const [isHeaderShow, setIsHeaderShow] = useState(false)
    const isLogin = useSelector((state : RootState) => state.userLoginReducer.isAuth)
    const isHeaderAndFooterOn = useSelector((state : RootState) => state.userLoginReducer.isHeaderAndFooterOn)
    useEffect(()=>{
        console.log("isheader " + isHeaderAndFooterOn)
        setIsHeaderShow((isHeaderAndFooterOn && isLogin))
        console.log(isHeaderShow)
    },[isLogin,isHeaderAndFooterOn])
    return(
        <BrowserRouter>
            {isHeaderShow === true ? <Header/> : null}
            <Route exact path={"/"} component={Auth(LandingPage, true)}/>
            <Route exact path={"/login"} component={Auth(LoginPage, false)}/>
            <Route exact path={"/register"} component={Auth(RegisterPage, false)}/>
            <Route exact path={"/self2image"} component={Auth(selfToImagePage,true)}/>
            <Route exact path={"/webtoon"} component={Auth(webtoonPage, true)}/>
            <Route path={"/webtoonSpecific/:id/:name"} component={Auth(WebtoonSpecificPage, true)}/>
            <Route path={"/webtoonImagePage/:index/:title"} component={Auth(WebtoonImagePage, true)}/>
            <Route path={"/webtoon/author/admin/:email/:name"} component={Auth(AuthorAdminPage, true)}/>
            {isHeaderShow === true ? <Footer/> : null}
        </BrowserRouter>
    )
};

export default App 