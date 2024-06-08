import "./CartNavigation.css"
import CartIcon from "../Cart/CartIcon";
import Button from "../UI/Button";

function CartNavigation() {
    return (
        <Button>
        <span class='icon'>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span class='badge'>0</span>
      </Button>
    );
}

export default CartNavigation;