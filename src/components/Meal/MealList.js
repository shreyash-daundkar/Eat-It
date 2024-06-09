import Card from "../UI/Card";
import Meal from "./Meal";
import "./MealList.css"

const meals = [
    {
        id: 1,
        name: 'Misal',
        description: "its good",
        price: 70,
    },
    {
        id: 2,
        name: 'Misal',
        description: "its good",
        price: 70,
    },
    {
        id: 3,
        name: 'Misal',
        description: "its good",
        price: 70,
    },
    {
        id: 4,
        name: 'Misal',
        description: "its good",
        price: 70,
    },
]

function MealList() {
    return (
        <Card class='meal-list'>
            <ul>
                {meals.map(meal => {
                    return (
                    <Meal meal={meal} key={meal.id}/>
                    )
                })}
            </ul>
        </Card>
    );
}

export default MealList;