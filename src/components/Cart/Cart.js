import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import './Cart.scss'
import CartDetail from "../../components/CartDetail";

const Cart = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 100;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * price;
        });

        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    return (
        <Container className="cart">
            <Row>
                <Col md={6}>
                    <div className="cart__detail">
                        {cart.map((item) => (
                            <CartDetail key={item.key} item={item} />
                        ))}
                    </div>
                </Col>
                <Col md={6}>
                    <div className="cart__summary">
                        <h4 className="">Total del carro</h4>
                        <div className="">
                            <span>Total de item en el carro: ({totalItems} items)</span>
                            <p>Total de compra: $ {totalPrice}</p>
                        </div>
                        <Link className="cart__checkout" to={'/carrito'} >Checkout</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.products.cart,
    };
};

export default connect(mapStateToProps)(Cart);