import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Product from '../../components/Product'
import './Products.scss'

import { useDispatch, useSelector } from 'react-redux'
import { getProductsAction } from '../../redux/actions/productsAction'

export default function Products() {
    const dispatch = useDispatch()

    const products = useSelector(store => store.products.products)

    useEffect(() => {
        const fetchData = () => {
            dispatch(getProductsAction())
        }
        fetchData()
    }, [dispatch])

    return (
        <Container>
            <Row>
                <h1 className="title-products">Productos disponibles</h1>

                {products.map((product) => (
                    <Product key={product.key} product={product} />
                ))}
            </Row>
        </Container>
    )
}