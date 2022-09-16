import React, { useState, useEffect } from "react";
import classes from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

// const DUMMY_MEALS = [
//     {
//         id: 'm1',
//         name: 'Kadhai Chicken',
//         description: 'Finest chicken and veggies',
//         price: 599,
//     },
//     {
//         id: 'm2',
//         name: 'Momos',
//         description: 'An east Indian specialty!',
//         price: 249,
//     },
//     {
//         id: 'm3',
//         name: 'Barbecue Burger',
//         description: 'American, raw, meaty',
//         price: 399,
//     },
//     {
//         id: 'm4',
//         name: 'Greens Bowl',
//         description: 'Healthy and green veggies',
//         price: 439,
//     },
// ];

const AvailableMeals = (props) => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            //rest api endpoint 
            const response = await fetch('https://react-http-c6096-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
            
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();

            const loadedMeals = [];

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                })
            }
            setMeals(loadedMeals);
            setIsLoading(false);
        }
        fetchMeals().catch((error => {
            setIsLoading(false);
            setHttpError(error.message);
        }));

    }, []);

    if (isLoading) {
        return (
            <section className={classes.MealsLoading}>
                <p>Loading...</p>
            </section>
        )
    };

    if (httpError) {
        return (
            <section className={classes.MealsError}>
                <p>{httpError}</p>
            </section>
        )
    }

    const mealsList = meals.map(meal =>
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price} />);

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
};

export default AvailableMeals;