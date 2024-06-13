const cartReducer = (prevState, action) => {
    let { cartItems, amount } = {...prevState};
    const { type, payload } = action;

    if(type === 'lc') {

        return {
            ...prevState,
            ...payload,
        }

    } else if ( type === 'add' ) {
        
        const { meal, quantity } = payload;
        
        const existingCartItem = cartItems.filter(item => item.id === meal.id);
        
        if(existingCartItem.length === 0) {
            const newCartItem = {
                ...meal,
                quantity,
            }
            cartItems.push(newCartItem)
            
        } else {
            existingCartItem[0].quantity += quantity;
        }

        const state = {
            cartItems,
            amount: amount += meal.price * quantity,
        }
        
        localStorage.setItem('cart-state', JSON.stringify(state));

        return state;   
    }
}

export default cartReducer;