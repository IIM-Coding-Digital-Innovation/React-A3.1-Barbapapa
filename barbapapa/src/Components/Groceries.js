import React, {useEffect, useState} from 'react';
// import {Link} from "react-router-dom";

function Groceries () {
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
            {recipes.map(recipe => (
                <div>
                    <img src={recipe.thumbnail_url} width="150" height="100" alt={recipe.name} />
                    <p key={recipe.id}>For the recipe : {recipe.name} </p>
                    <button onClick={() => handleRemoveRecipe(recipe.id)}>Remove</button>

                </div>
            ))}
        </div>
    )

}
export default Groceries;
