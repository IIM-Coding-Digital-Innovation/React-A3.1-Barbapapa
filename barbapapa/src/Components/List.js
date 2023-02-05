import React, { useState, useEffect } from "react";

const List = () => {


    // Déclaration du state pour la list
    const [list, setList] = useState([]);
    // Déclaration du state pour l'item
    const [item, setItem] = useState("");


    // Fonction pour ajouter un item à la liste
    const addItem = () => {
        // On ajoute l'item à la liste
        setList([...list, item]);
        // On vide l'input
        setItem("");
    };

    
    // Fonction pour supprimer un item de la liste
    const deleteItem = (index) => {
        // On supprime l'item de la liste
        setList(list.filter((item, i) => i !== index));
    };


    // Fonction pour supprimer tous les items de la liste
    const deleteAll = () => {
        // On vide la liste
        setList([]);
    };


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
        <div id="shopping-list">


            <h1>Liste de courses </h1>
            <p className="delete" onClick={deleteAll}>Vider la liste</p>


            <div className="input">
                <input type='text' value={item} onChange={(e) => setItem(e.target.value)} />
                <button onClick={addItem}>Ajouter</button>
            </div>

            <ul>

            {list.map((item, index) => (
                     <div>
                        <li>
                        <p onClick={(e) => e.target.classList.toggle('checked')} >&#8226; {item}</p>


                        <div className="action">  
                            {/* <svg width="15" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M51.5328 0L16.0324 39.0399L5.72587 31.2337H0L16.0324 57.2587L57.2587 0H51.5328Z" fill="black"/>
                            </svg> */}

                            <svg onClick={() => deleteItem(index)} width="20" viewBox="0 0 63 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M54.7666 3.14877H20.9319L2.71318 23.9701L20.9319 44.7915H54.7666C56.1471 44.7915 57.4711 44.2431 58.4473 43.2669C59.4235 42.2907 59.9719 40.9667 59.9719 39.5861V8.35411C59.9719 6.97357 59.4235 5.64957 58.4473 4.67338C57.4711 3.69719 56.1471 3.14877 54.7666 3.14877Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M46.9585 16.1621L31.3425 31.7781" stroke="gray" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M31.3425 16.1621L46.9585 31.7781" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>  
                        </li>
                    </div>
                ))}



            {recipes.map((recipe) => ( 

            <div key={recipe.id}> {recipe.sections.map(section => (<p> {
                section.components.map((components )=> (

                <li>
                <p onClick={(e) => e.target.classList.toggle('checked')} >&#8226; {components.ingredient.display_singular} </p>

                <div className="action">  
                        {/* <svg width="15" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.5328 0L16.0324 39.0399L5.72587 31.2337H0L16.0324 57.2587L57.2587 0H51.5328Z" fill="black"/>
                        </svg> */}

                        <svg onClick={(e) => deleteItem(e) } width="20" viewBox="0 0 63 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M54.7666 3.14877H20.9319L2.71318 23.9701L20.9319 44.7915H54.7666C56.1471 44.7915 57.4711 44.2431 58.4473 43.2669C59.4235 42.2907 59.9719 40.9667 59.9719 39.5861V8.35411C59.9719 6.97357 59.4235 5.64957 58.4473 4.67338C57.4711 3.69719 56.1471 3.14877 54.7666 3.14877Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M46.9585 16.1621L31.3425 31.7781" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M31.3425 16.1621L46.9585 31.7781" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>  


                </li>
                
                ))} </p>))} 
            </div>))} 


            </ul>

        </div>
    );
};

export default List;