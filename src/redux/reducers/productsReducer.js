import * as actionTypes from '../consts/actionTypes'

const initialState = {
    products: [],
    cart: [],
    error: null,
    loading: false,
    currentItem: null
}


export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_EXITO:
            return { ...state, products: action.payload }
        case actionTypes.ADD_TO_CART:
            const item = state.products.find(
                (product) => product.key === action.payload.key
            );
            const inCart = state.cart.find((item) =>
                item.key === action.payload.key ? true : false
            );

            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.key === action.payload.key
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.key !== action.payload.key),
            };
        case actionTypes.ADJUST_ITEM_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.key === action.payload.key
                        ? { ...item, qty: +action.payload.qty }
                        : item
                ),
            };
        default:
            return state
    }
}