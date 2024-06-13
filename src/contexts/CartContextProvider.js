import { createContext, useEffect, useReducer, useState } from "react";
import cartReducer from "./cartReducer";

export const cartContext = createContext({
    cartModalOpen: false,
    setCartModalOpen: () => {},
    cartState: {},
    addToCart: () => {},
    incrementQuantity: () => {},
    decrementQuantity: () => {},
});

               
function CartContextProvider(props) {

    const [ cartModalOpen, setCartModalOpen ] = useState(false);

    let initialState = {
        cartItems: [],
        amount: 0,
    }

    const [state, dispatch] = useReducer(cartReducer, initialState);
    
    useEffect(() => {
        let state = localStorage.getItem('cart-state');
        state = state ? JSON.parse(state) : initialState;
        dispatch({
            type: 'lc',
            payload: state,
        });
    }, []);

    console.log(state)
    
    const addToCart = (meal, quantity) => dispatch({
        type: 'add',
        payload: {
            meal,
            quantity,
        }
    });
        
    const incrementQuantity = id => dispatch({
        type: '++',
        payload: id,
    });
            
    const decrementQuantity = id => dispatch({
        type: '--',
        payload: id,
    });
        
    return (
        <cartContext.Provider value={{
            cartModalOpen: cartModalOpen,
            setCartModalOpen: setCartModalOpen,
            cartState: state,
            addToCart: addToCart,
            incrementQuantity: incrementQuantity,
            decrementQuantity: decrementQuantity,
        }}>
            {props.children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;