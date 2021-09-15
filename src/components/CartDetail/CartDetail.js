import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
    adjustItemQty,
    removeFromCart,
} from "../../redux/actions/productsAction.js";
import './CartDetail.scss'

const CartDetail = ({ item, adjustQty, removeFromCart }) => {
    const [input, setInput] = useState(item.qty);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustQty(item.key, e.target.value);
    };

    return (

        <Card className="cardAll">
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Tipo: Video Juego</Card.Text>
                <Card.Text>
                    <div className="cardAll__qty">
                        <label htmlFor="qty">Qty</label>
                        <input
                            className="cardAll__input"
                            min="1"
                            type="number"
                            id="qty"
                            name="qty"
                            value={input}
                            onChange={onChangeHandler}
                        />
                    </div>
                </Card.Text>
                <Card.Text>
                    <div className="">

                        <Button variant="danger"
                            onClick={() => removeFromCart(item.key)}
                            className=""
                        >
                            <i class="fas fa-trash-alt"></i>
                        </Button>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>



    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        adjustQty: (key, value) => dispatch(adjustItemQty(key, value)),
        removeFromCart: (key) => dispatch(removeFromCart(key)),
    };
};

export default connect(null, mapDispatchToProps)(CartDetail);
