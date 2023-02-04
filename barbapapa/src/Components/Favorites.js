import React, {useState} from 'react';
import Recipe from "./Recipe";

function Favorites() {
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    );

    const removeFromFavorites = (recipeId) => {
        setFavorites(favorites.filter(favorite => favorite.id !== recipeId));
        localStorage.setItem("favorites", JSON.stringify(favorites.filter(favorite => favorite.id !== recipeId)));
    };

    return (
        <div className="Favorites">
            <h1>Favorites list</h1>
            <ul>
            {favorites.map((favorite, index) => (
                <li key={index}>
                <h2>{favorite.name}</h2>
                <button onClick={() => removeFromFavorites(favorite.id)}>Remove from favorites</button>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default Favorites;