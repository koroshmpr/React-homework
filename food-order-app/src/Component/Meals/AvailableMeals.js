import React from "react"; 
import classes from './AvailableMeals.module.css';
import Mealitem from "./MealItem/MealItem";
import Card from '../UI/Card';

const DUMMY_DATA = [
    {
        id: 'meal-01',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price : 22.99
    },
    {
        id: 'meal-02',
        name: 'Pasta',
        description: 'Special food for you',
        price : 15.89
    },
    {
        id: 'meal-03',
        name: 'Barbecue Burger',
        description: 'American, meaty, raw',
        price : 17.13
    },
    {
        id: 'meal-04',
        name: 'Pizza',
        description: 'Healthy',
        price : 25.45
    }
]
const AvailableMeals  = props => {
    const  mealsitems = DUMMY_DATA.map(meal => <Mealitem 
        key={meal.id} 
        meal={meal}
        />);
    return (
            <section className={classes.meals}>
                <Card>
                    <ul>
                        {mealsitems}
                    </ul>
                </Card>
            </section>

    )
}
export default AvailableMeals;