import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import './TopMenu.scss'
import { connect } from "react-redux";

import Cart from '../Cart'

const TopMenu = ({ cart }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });

        setCartCount(count);
    }, [cart, cartCount]);

    return (
        <Navbar className="menu">
            <Container>
                <Nav className="menu__link me-auto">
                    <Link className="menu__logo navbar-brand" to={'/'} >Mercat-ecommerce</Link>
                    <Link className="menu__cart" to={'/carrito'} >Mis productos</Link>
                </Nav>
                <Nav>
                    <button className="menu__button" onClick={handleShow}>
                        Comprar
                    </button>
                    <i className="menu__ico fas fa-cart-plus"><span>{cartCount}</span></i>
                </Nav>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Carrito de compra</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Cart />
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.products.cart,
    };
};

export default connect(mapStateToProps)(TopMenu);