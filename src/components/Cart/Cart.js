import Card from "../UI/Card";
import CartItem from "./CartItem";
import "./Cart.css"
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import { useContext } from "react";
import { cartContext } from "../../contexts/CartContextProvider";

const meals = [
    {
        id: 1,
        name: 'Misal',
        price: 70,
        quantity:1,
    },
    {
        id: 2,
        name: 'Misal',
        price: 70,
        quantity:1,
    },
    {
        id: 3,
        name: 'Misal',
        price: 70,
        quantity:1,
    },
    {
        id: 4,
        name: 'Misal',
        price: 70,
        quantity:1,
    },
]




function Cart() {

    const { cartModalOpen, setCartModalOpen, cartState } = useContext(cartContext);

    const closeModal = () => setCartModalOpen(false);

    return cartModalOpen ? (
        <Modal 
        class="cart"
        onBackdropClick={closeModal}
        >
            <ul>
                { cartState.cartItems.map(c => <CartItem cartItem={c} key={c.id} />) }
            </ul>
            <div class='total'>
                <span>Total Amount</span>
                <span>
                    {cartState.amount}
                </span>
            </div>
            <div class="action">
                <Button class="sec-btn">Order</Button>
                <Button onClick={closeModal}>Close</Button>
            </div>
        </Modal> 
    ) : null;
}

export default Cart;