import React from 'react'
import { Col, Card } from 'react-bootstrap'
import './Product.scss'

import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions/productsAction'

const Product = (props) => {

    const { product } = props
    const dispatch = useDispatch()
    const addProduct = () => {
        alert("Se agrego correctamente")

        dispatch(addToCart(product.key))
    }

    return (
        <Col xs={6} md={4} className="product">
            <Card className="product__container">
                <Card.Body>
                    <Card.Title className="product__title">{product.name}</Card.Title>
                    <Card.Text>
                        Tipo: Video Juego
                    </Card.Text>
                    <Card.Text>
                        Precio: 100$
                    </Card.Text>
                    <button className="product__button" onClick={() => addProduct()} >Añadir al carrito</button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Product;
