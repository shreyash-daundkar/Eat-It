import "./Hero.css"
import mealImage from "../../assets/meals.jpg"
import Summary from "./Summary";

function Hero() {
    return (
        <div>
            <div class='main-image'>
                <img src={mealImage}/>
            </div>
            <Summary />
        </div>
    );
}

export default Hero;