import "./CartNavigation.css"
import CartIcon from "../Cart/CartIcon";

function CartNavigation() {
    return (
        <button class='button'>
        <span class='icon'>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span class='badge'>0</span>
      </button>
    );
}

export default CartNavigation;