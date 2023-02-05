import React, {useEffect, useState} from 'react';
// import {useParams} from "react-router-dom";

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


    return (

        <div>
            {recipes.map(recipe => (
                <p key={recipe.id}>{recipe.id} : {recipe.name} </p>
            ))}
        </div>
    )

}
export default Saved;
