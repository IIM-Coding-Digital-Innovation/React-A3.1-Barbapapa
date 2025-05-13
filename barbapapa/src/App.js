import { Component } from "react";
import './App.css';
import {
    Routes,
    Route,
    Link
} from 'react-router-dom';

import Home from "./Components/Home";
import Recipe from "./Components/Recipe";
import Saved from "./Components/Saved";
import List from "./Components/List";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ul className="Nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/saved">Saved</Link></li>
                    <li><Link to="/list">Shopping list</Link></li>
                    <button onClick={() => { throw new Error("This is your first error!"); }}>Break the world</button>
                </ul>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/saved" element={<Saved />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/recipe/:recipeId" element={<Recipe />} />
                </Routes>
            </div>
        );
    }
}

export default App;
