import "./Header.css"
import CartNavigation from "./CartNavigation";
import mealImage from "../../assets/meals.jpg"

function Header() {
    return (
        <>
        <header class="header">
            <h1>EAT IT</h1>
            <CartNavigation />
        </header>
        <div class='main-image'>
            <img src={mealImage}/>
        </div>
        </>

    );
}

export default Header;