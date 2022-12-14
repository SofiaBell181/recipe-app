import { useEffect, useState } from "react";
import './App.css';

function Recipies({allRecipes}) {

    const [filtredRecipes, setFiltredRecipes] = useState([]);

    const filtredMeals = (dishType) => {
        let filtrRes = allRecipes.filter(elem => elem.recipe.dishType[0] === dishType);
        setFiltredRecipes(filtrRes);
    }

    useEffect( () => {
        if(allRecipes.length > 0) setFiltredRecipes(allRecipes)
    }, [allRecipes])

    return(
        <>

        <div className="container-btn">
            <button className="filter-btn" onClick={() => filtredMeals('salad')}>salad</button>
            <button className="filter-btn" onClick={() => filtredMeals('starter')}>starter</button>
            <button className="filter-btn" onClick={() => filtredMeals('soup')}>soup</button>
            <button className="filter-btn" onClick={() => filtredMeals('main course')}>main course</button>
            <button className="filter-btn" onClick={() => filtredMeals('sandwiches')}>sandwiches</button>
            <button className="filter-btn hidden" onClick={() => filtredMeals('bread')}>bread</button>
            <button className="filter-btn" onClick={() => filtredMeals('condiments and sauces')}>sauces</button>
            <button className="filter-btn" onClick={() => filtredMeals('desserts')}>dessert</button>
            <button className="filter-btn" onClick={() => filtredMeals('drinks')}>drinks</button>
            <button className="filter-btn" onClick={() => filtredMeals('alcohol-cocktail')}>alcohol-cocktail</button>
        </div>

        <div className="container_recipes">
            {filtredRecipes.map((elem, index) => (
            <section key={index.toString()}>
            <h3>{index+1}. {elem.recipe.label}</h3>
            <img src={elem.recipe.image} width='300px' height='auto' alt={elem.recipe.label} />
            <ul>
               {elem.recipe.ingredientLines.map((item, index) => <li key={index.toString()}>{item}</li>)}
            </ul>
            <p>Calories: {Math.round(elem.recipe.calories)}</p>
            </section>
            ))}
      </div>


        </>
    )
}

export default Recipies;