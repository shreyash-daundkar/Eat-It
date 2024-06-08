import Card from "../UI/Card";
import Meal from "./Meal";

const meals = [
    {
        id: 1,
        name: 'Misal',
        price: 70,
    },
]

function MealList() {
    return (
        <Card>
            {meals.map(meal => {
                return (
                    <Meal meal={meal}/>
                )
            })}
        </Card>
    );
}

export default MealList;