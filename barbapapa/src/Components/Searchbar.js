import React, { useState, useEffect,  } from "react";
import './Home.css';

const SearchBar = ({ setFilteredRecipes }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [recipes, setRecipes] = useState([]);

    //useEffect(() => { // fetch data from API

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFilteredRecipes(
        recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        );
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Find a recipe"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>

            <div>
                <div>
                    {recipes.map((recipe) => (
                        <div key={recipe.id}>
                            <h3>{recipe.title}</h3>
                            <img src={recipe.image} alt={recipe.title} />
                            <p>{recipe.description}</p>
                            <button>View recipe</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
        

    );
    };

export default SearchBar;
