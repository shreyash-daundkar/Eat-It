import { createContext, useState } from "react";

export const cartContext = createContext({
    cartModalOpen: false,
    setCartModalOpen: () => {},
});



function CartContextProvider(props) {
    
    const [ cartModalOpen, setCartModalOpen ] = useState(false);

    return (
        <cartContext.Provider value={{
            cartModalOpen: cartModalOpen,
            setCartModalOpen: setCartModalOpen,
        }}>
            {props.children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;