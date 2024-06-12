import "./CartNavigation.css"
import CartIcon from "../Cart/CartIcon";
import Button from "../UI/Button";
import { useContext } from "react";
import { cartContext } from "../../contexts/CartContextProvider";

function CartNavigation() {

  const { setCartModalOpen } = useContext(cartContext);
  
  const openCartModal = e => setCartModalOpen(true);

    return (
        <Button onClick={openCartModal}>
        <span class='icon'>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span class='badge'>0</span>
      </Button>
    );
}

export default CartNavigation;