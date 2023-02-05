import React, {useEffect, useState} from 'react';
import {Link, Route, Routes, useParams} from "react-router-dom";

function Recipe ({ posts }){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [recipe, setRecipe] = useState();
    // const [item, setItem] = useState();

    let { recipeId } = useParams();

    // const showStorage = async () => {
    //     const recipe = JSON.parse(localStorage.getItem('recipe'));
    //     if (recipe) {
    //         setRecipe(recipe);
    //     }
    // };

    // const callAPI = async () => {
    //     try {
    //         const response = await fetch(`https://tasty.p.rapidapi.com/recipes/get-more-info?id=${recipeId}`, {
    //             method: 'GET',
    //             headers: {
    //                 'X-RapidAPI-Key': '415a4867edmsh0c7c38867940a83p184fcejsn73b56f074c1d',
    //                 'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    //             }
    //         })
    //         const data = await response.json();
    //         localStorage.setItem('recipe', JSON.stringify(data));
    //         setData(data);
    //         console.log(data);
    //         console.log("saved data")
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };



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

    // const click = (name) => {
    //     const data = posts.find((post) => post.name === name);
    //     const localStorageItems = JSON.parse(localStorage.getItem('datas')) || [].
    //     localStorage.setItem('datas', JSON.stringify([...localStorageItems, data]))
    //     console.log("saved recipe")
    // };

    const handleSave = () => {
        localStorage.setItem('recipe', JSON.stringify(recipe));
        console.log(recipe)
        console.log("saved data")
    };
    return (
        <div className="App">
            <h1>API Recipe</h1>
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            {/*<ul>*/}
            {/*    {data2.map((element) => (*/}
            {/*        <li>{element.quantity} {element.unit} {element.ingredient}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            {/*<ul>*/}
            {/*    {data2.map((element) => (*/}
            {/*        <li>{element.wholeLine}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            {!loading &&
                <div>
                    <h3>Chargement...</h3>
                </div>
            }
            {loading &&
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
            }

            {loading &&
                <ul>
                    {data &&
                        data.instructions.map((el, i) => (
                            <li key={i}>
                                {el.display_text}
                            </li>
                        ))}
                </ul>
            }

            {/*<button onClick={() => click(data.name)}>Add Favt</button>*/}


            {/*<button onClick={callAPI}>Save Recipe</button>*/}
            <button onClick={handleSave}>Save</button>

            {/*<br/>*/}
            {/*<button onClick={showStorage}>Show Storage</button>*/}

            {/*{loading &&*/}
            {/*<ul>*/}
            {/*    {recipe &&*/}
            {/*    recipe.instructions.map((el, i) => (*/}
            {/*        <li key={i}>*/}
            {/*            {el.display_text}*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            {/*}*/}

            {/*{recipe && <pre>{JSON.stringify(recipe, null, 4)}</pre>}*/}
            <Routes>
                <Route exact path='/recipe' element={< Recipe />}></Route>
            </Routes>
        </div>
    );
}

export default Recipe;
