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

    } else if (type === '--') {

        const id = payload;

        const cartItem = cartItems.filter(item => item.id === id)[0];

        if(cartItem.quantity === 1) {

            cartItems = cartItems.filter(item => item.id !== id);
        } else {

            cartItem.quantity--;
            cartItems = cartItems.map(item => item.id === id ? cartItem : item);
        }
        
        const state = {
            cartItems,
            amount: amount -= cartItem.price,
        }
        
        localStorage.setItem('cart-state', JSON.stringify(state));

        return state;   

    } else if (type === '++') {

        const id = payload;

        const cartItem = cartItems.filter(item => item.id === id)[0];
        cartItem.quantity++;
        cartItems = cartItems.map(item => item.id === id ? cartItem : item);
    
        const state = {
            cartItems,
            amount: amount += cartItem.price,
        }
        
        localStorage.setItem('cart-state', JSON.stringify(state));

        return state;

    } else if (type === 'o') {

        console.log(prevState);
        
        return {
            cartItems: [],
            amount: 0,
        }
    }
}

export default cartReducer;