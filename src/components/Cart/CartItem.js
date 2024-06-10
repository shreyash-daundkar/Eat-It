import Button from "../UI/Button";
import "./CartItem.css"

function CartItem(props) {

    const { name, price, quantity } = props.cartItem;

    return (
        <li class='cart-item'>
            <div>
                <h3>
                    {name}
                </h3>
                <div class="price-quantity">
                    <span class='cart-price'>
                        {price}
                    </span>
                    <span class='cart-quantity'>
                        x{quantity}
                    </span>
                </div>
            </div>
            <div class='change-quantity'>
                <Button class="sec-btn small-btn">+</Button>
                <Button class="sec-btn small-btn">-</Button>
            </div>
        </li>
    );
}

export default CartItem;