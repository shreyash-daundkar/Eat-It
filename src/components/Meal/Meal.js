import { useContext } from "react";
import AddToCartForm from "./AddToCartForm";
import "./Meal.css"
import { cartContext } from "../../contexts/CartContextProvider";

function Meal(props) {

    const cartCtx = useContext(cartContext);

    const addToCart = quantity => quantity > 0 ? cartCtx.addToCart(props.meal, quantity) : null;

    return (
        <li class="meal">
            <div>
                <h3>{props.meal.name}</h3>
                <div class="description">{props.meal.description}</div>
                <div class="price">{props.meal.price}</div>
            </div>
            <AddToCartForm addToCart={addToCart}/>
        </li>
    );
}

export default Meal;