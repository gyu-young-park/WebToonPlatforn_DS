import * as React from 'react'
import './index.css'
import {NavDropdown,Navbar, Nav} from "react-bootstrap";

const Header = () => {
    return(
        <Navbar className={"header-container"} collapseOnSelect expand="lg" bg="light" variant="light" >
            <div className={"header-wrapper"}>
                <Navbar.Brand href="#home">WebToon</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </div>
            <div className={"header-button-wrapper"}>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-2">
                        <Nav.Link className={"header-a"}  href="#features">BeeW</Nav.Link>
                        <Nav.Link className={"header-a"} href="#pricing">WebToon</Nav.Link>
                        <Nav.Link className={"header-a"} href="#pricing">LAB</Nav.Link>
                        <NavDropdown className={"header-a"} title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">박규영</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">윤동희</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">김민수</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </div>
        </Navbar>
        // <div className={"header-container"}>
        //     <Navbar bg="light" variant="light">
        //         <div className={"header-wrapper"}>
        //             <Navbar.Brand href="#home">Image</Navbar.Brand>
        //         </div>
        //         <div className={"header-button-wrapper"}>
        //             <Nav className="mr-auto">
        //                 <Nav.Link href="#home">Home</Nav.Link>
        //                 <Nav.Link href="#features">Features</Nav.Link>
        //                 <Nav.Link href="#pricing">Pricing</Nav.Link>
        //             </Nav>
        //         </div>
        //     </Navbar>
        // </div>
        // <div className={"header-container"}>
        //     <div className={"header-wrapper"}>
        //         <div className={"header-brand-image"}>
        //             <h1>hello</h1>
        //         </div>
        //         <div className={"header-button-wrapper"}>
        //             <a className={"header-a"}>BeeW</a>
        //             <a className={"header-a"}>WebToon</a>
        //             <a className={"header-a"}>LAB</a>
        //             <a className={"header-a"}>MY</a>
        //
        //         </div>
        //     </div>
        // </div>
    )
}

export default Header;
