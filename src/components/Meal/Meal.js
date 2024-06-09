import AddToCartForm from "./AddToCartForm";
import "./Meal.css"

function Meal(props) {
    return (
        <li class="meal">
            <div>
                <h3>{props.meal.name}</h3>
                <div class="description">{props.meal.description}</div>
                <div class="price">{props.meal.price}</div>
            </div>
            <AddToCartForm />
        </li>
    );
}

export default Meal;