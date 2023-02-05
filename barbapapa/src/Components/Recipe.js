import React, {useEffect, useState} from 'react';
import {Link, Route, Routes, useParams} from "react-router-dom";

function Recipe ({ posts }){
    const [data, setData] = useState(null);
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
                    'X-RapidAPI-Key': '415a4867edmsh0c7c38867940a83p184fcejsn73b56f074c1d',
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                }
            })
                .then((response) => response.json())
                .then((actualData) => {
                    console.log(actualData)
                    setData(actualData);
                    setRecipe(actualData);

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
                    <h3>Loading...</h3>
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
            <Routes>
                <Route exact path='/recipe' element={< Recipe />}></Route>
            </Routes>
        </div>
    );
}

export default Recipe;
