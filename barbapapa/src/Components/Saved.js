import React, {useState} from 'react';

function Saved () {
    const [recipe, setRecipe] = useState ( () => {
        const savedItem = localStorage.getItem("userName");
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || "";
    });

    const getStorageData = (keyName, defaultValue) =>{
        const savedItem = localStorage.getItem(keyName);
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }

    return (
        <h1>Saved Recipe</h1>
    )

}
export default Saved;
