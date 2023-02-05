import React, {useEffect, useState} from 'react';
import {Link, Route, Routes, useParams} from "react-router-dom";

function Recipe ({ posts }){
    const [data, setData] = useState(null);
    const [similarData, setSimilarData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [recipe, setRecipe] = useState();
    // const [item, setItem] = useState();

    let { recipeId } = useParams();

    useEffect(() => {

        if (loading === false){
            fetch(`https://tasty.p.rapidapi.com/recipes/get-more-info?id=${recipeId}`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '87d119cf7cmsh0b635d3245ed007p1fbe7ajsn44560d0d6180',
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                }
            })
                .then((response) => response.json())
                .then((actualData) => {
                    // console.log(actualData)
                    setData(actualData);
                    setRecipe(actualData);

                    setError(null);
                    setLoading(true)
                })
                .catch((err) => {
                    setError(err.message);
                    setData(null);
                })

            fetch(`https://tasty.p.rapidapi.com/recipes/list-similarities?recipe_id=${recipeId}`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '87d119cf7cmsh0b635d3245ed007p1fbe7ajsn44560d0d6180',
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                }
            })
                .then((response) => response.json())
                .then((actualSimilarData) => {
                    setSimilarData(actualSimilarData);
                    setError(null);
                    setLoading(true)
                })
                .catch((err) => {
                    setError(err.message);
                    setData(null);
                })

        }

    }, []);


    const handleSave = () => {
        // const recipe = recipes.find(r => r.id === id);
        localStorage.setItem(`recipe-${recipeId}`, JSON.stringify(recipe));
        // localStorage.setItem('recipe', JSON.stringify(recipe));
        console.log(recipe)
        console.log("saved data")
    };




    return (
        <div className="SingleRecipe">
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}

            {!loading &&
                <div>
                    <iframe src="https://giphy.com/embed/Pqf31C9P1AuIg" width="480" height="360" frameBorder="0"
                            className="giphy-embed" allowFullScreen></iframe>
                </div>
            }

            {loading &&
            <div className='RecipeInfos'>
                <h1>{data.name}</h1>
                <img src={data.thumbnail_url} alt={data.name} />
                <button onClick={handleSave}>Save recipe</button>
            </div>
        }

            {loading &&
                <div className='RecipeDetails'>
                    <h2>Ingredients</h2>
                    <ul>
                        {data &&
                            data.sections.map((el, i) => (
                                el.components.map((l, j) => (
                                    <li key={j}>
                                        {l.raw_text}
                                    </li>
                                ))
                            ))}
                    </ul>
                </div>
            }

            {loading &&
                <div className='RecipeDetails'>
                    <h2>Instructions</h2>
                    <ul>
                        {data &&
                            data.instructions.map((el, i) => (
                                <li key={i}>
                                    {el.display_text}
                                </li>
                            ))}
                    </ul>
                </div>
            }

            {loading &&
                <div>
                    <h1>Similar Recipes</h1>
                    <div className='Similar'>
                        {similarData &&
                            similarData.results.map((el, i) => (
                                <div className='recipe_box box_similar' key={i}>
                                    <img src={el.thumbnail_url} alt='{el.name}' />
                                    <h3>{el.name}</h3>
                                    <Link to={`/recipe/${el.id}`}>View recipe</Link>
                                </div>
                            ))}
                    </div>
                </div>
            }



        </div>
    );
}

export default Recipe;