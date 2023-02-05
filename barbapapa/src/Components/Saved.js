import React, {useEffect, useState} from 'react';
// import {useParams} from "react-router-dom";

function Saved () {
    // const [data, setData] = React.useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);

    const [data, setData] = useState(null);

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const storedRecipe = localStorage.getItem('recipe');
        if (storedRecipe) {
            setRecipe(JSON.parse(storedRecipe));
        }
    }, []);


    return (

        <div>
            {recipe ? (
                <>
                    <p>{recipe.id}</p>
                </>
            ) : (
                <p>No recipe found in local storage.</p>
            )}
        </div>
    )

}
export default Saved;
