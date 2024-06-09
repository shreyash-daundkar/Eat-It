import { useState } from "react";
import Button from "../UI/Button";
import "./AddToCartForm.css"

function AddToCartForm() {

    const [quantity, setQuantity] = useState(1);

    const handleQuantity = e => {
        setQuantity(e.target.value);
        console.log(quantity)
    }

    const addToCart = e => {
        e.preventDefault();
        console.log(quantity)
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