function Meal(props) {
    return (
        <div>
            <p>{props.meal.name}</p>
            <p>{props.meal.price}</p>
            <hr />
        </div>

    );
}

export default Meal;