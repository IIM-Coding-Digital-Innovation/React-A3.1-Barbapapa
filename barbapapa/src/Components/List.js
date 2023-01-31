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



    return (
        <div id="shopping-list">
            <h1>Liste de courses </h1>
            <input type='text' value={item} onChange={(e) => setItem(e.target.value)} />
            <button onClick={addItem}>Ajouter</button>
            <button onClick={deleteAll}>Vider la liste</button>

            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => deleteItem(index)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;