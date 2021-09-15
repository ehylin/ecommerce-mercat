import * as actionTypes from '../consts/actionTypes'
import clienteAxios from '../../utils/axios'

export const getProductsAction = () => async (dispatch) => {
    try {
        const res = await clienteAxios.get()
        dispatch({
            type: actionTypes.GET_PRODUCT_EXITO,
            payload: res.data.amiibo
        })
    } catch (error) {
        console.log(error)
    }

}

export const addToCart = (itemKey) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            key: itemKey,
        },
    };
};


export const removeFromCart = (itemKey) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            key: itemKey,
        },
    };
};

export const adjustItemQty = (itemKey, qty) => {
    return {
        type: actionTypes.ADJUST_ITEM_QTY,
        payload: {
            key: itemKey,
            qty,
        },
    };
};
