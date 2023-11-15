import { useState } from "react";
import { 
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [ menuOpen, setMenuOpen ] = useState(false);

    return (
        <Navbar dark color="primary" sticky="top" expand="xl">
            <NavbarBrand className="ms-5" href="/"></NavbarBrand>
        </Navbar>
    );
};