import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Recipe() {
    const [data, setData] = useState(null);
    const [similarData, setSimilarData] = useState(null);
    const [loading, setLoading] = useState(true); // Start with loading true
    const [error, setError] = useState(null);
    const [recipe, setRecipe] = useState(null);

    let { recipeId } = useParams();

    useEffect(() => {
        // Reset states when recipeId changes
        setLoading(true);
        setData(null);
        setSimilarData(null);
        setError(null);
        setRecipe(null);

        // Fetch recipe details
        fetch(`https://tasty.p.rapidapi.com/recipes/get-more-info?id=${recipeId}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fa35b75d07mshec252f40e7f1108p1873a3jsne303f51b00de',
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
            },
        })
            .then((response) => response.json())
            .then((actualData) => {
                setData(actualData);
                setRecipe(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false); // Set loading to false after fetch completes
            });

        // Fetch similar recipes
        fetch(`https://tasty.p.rapidapi.com/recipes/list-similarities?recipe_id=${recipeId}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fa35b75d07mshec252f40e7f1108p1873a3jsne303f51b00de',
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
            },
        })
            .then((response) => response.json())
            .then((actualSimilarData) => {
                setSimilarData(actualSimilarData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setSimilarData(null);
            });
    }, [recipeId]); // Runs whenever recipeId changes

    const handleSave = () => {
        localStorage.setItem(`recipe-${recipeId}`, JSON.stringify(recipe));
    };

    return (
        <div className="SingleRecipe">
            {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
            {loading && (
                <div>
                    <iframe
                        src="https://giphy.com/embed/Pqf31C9P1AuIg"
                        width="480"
                        height="360"
                        frameBorder="0"
                        className="giphy-embed"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {!loading && data && (
                <div className="RecipeInfos">
                    <h1>{data.name}</h1>
                    <img src={data.thumbnail_url} alt={data.name} />
                    <button onClick={handleSave}>Save recipe</button>
                </div>
            )}

            {!loading && data && (
                <div className="RecipeDetails">
                    <h2>Ingredients</h2>
                    <ul>
                        {data.sections?.map((el, i) =>
                            el.components.map((l, j) => (
                                <li key={j}>{l.raw_text}</li>
                            ))
                        )}
                    </ul>
                </div>
            )}

            {!loading && data && (
                <div className="RecipeDetails">
                    <h2>Instructions</h2>
                    <ul>
                        {data.instructions?.map((el, i) => (
                            <li key={i}>{el.display_text}</li>
                        ))}
                    </ul>
                </div>
            )}

            {!loading && similarData && (
                <div>
                    <h1>Similar Recipes</h1>
                    <div className="Similar">
                        {similarData.results?.map((el, i) => (
                            <div className="recipe_box box_similar" key={i}>
                                <img src={el.thumbnail_url} alt={el.name} />
                                <h3>{el.name}</h3>
                                <Link to={`/recipe/${el.id}`}>View recipe</Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Recipe;