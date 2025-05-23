import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

function Saved () {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const allRecipes = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('recipe-')) {
                const recipe = JSON.parse(localStorage.getItem(key));
                allRecipes.push(recipe);
            }
        }
        setRecipes(allRecipes);
    }, []);

    const handleRemoveRecipe = recipeId => {
        localStorage.removeItem(`recipe-${recipeId}`);
        setRecipes(recipes.filter(recipe => recipe.id !== recipeId));
    };


    return (
        <div>
            <h1>Saved Recipes</h1>
            <ul className='recipes'>
            {recipes.map(recipe => (
                <li className='recipe_box'>
                    <img src={recipe.thumbnail_url} loading="lazy" width="150" height="100" alt={recipe.name} />
                    <p key={recipe.id}>{recipe.name} </p>
                    <Link to={`/recipe/${recipe.id}`}>View recipe</Link>
                    <button className="remove-btn" onClick={() => handleRemoveRecipe(recipe.id)}>Remove</button>
                </li>
            ))}
            </ul>
        </div>
    )

}
export default Saved;
