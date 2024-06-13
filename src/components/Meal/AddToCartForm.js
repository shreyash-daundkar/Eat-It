import { useState } from "react";
import Button from "../UI/Button";
import "./AddToCartForm.css"

function AddToCartForm(props) {

    const [quantity, setQuantity] = useState(1);

    const handleQuantity = e => setQuantity(+e.target.value);

    const addToCart = e => {
        e.preventDefault();
        props.addToCart(quantity);
        setQuantity(1);
    }

    return (
        <form class="form" onSubmit={addToCart}>
            <div>
                <label htmlFor="quantity" class="quantity">Quantity: </label>
                <input 
                type="number" 
                id="quantity" 
                value={quantity}
                onChange={handleQuantity}/>
            </div>
            <Button class="add-btn" type="submit"> + Add</Button>
        </form>
    );
}

export default AddToCartForm;