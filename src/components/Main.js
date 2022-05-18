import React from 'react'
import '../App.css';
import ShowPage from '../pages/ShowPage';
import About from '../pages/About';
import Home from '../pages/Home';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";



function Main(props) {

    const [recipes, setRecipes] = useState(null);
    const URL = "http://localhost:4005/recipes";

    const getRecipes = () => {
        fetch(URL)
            .then(response => response.json())
            .then((result) => setRecipes(result))
    }

    const createRecipe = async (recipe) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recipe),
        });
        getRecipes();
    };

    const updateRecipe = async (recipe, id) => {
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recipe),
        })
        getRecipes()
    }

    const deleteRecipe = async id => {
        await fetch(URL + id, {
            method: "delete",
        })

        getRecipes()
    }

    useEffect(() => getRecipes(), []);
    return (
        <>
            <main>
                <Routes>
                    <Route path="/recipes" element={<Home recipes={recipes} getRecipes={getRecipes} createRecipe={createRecipe} />}>
                    </Route>
                    <Route path="/about" element={<About />} >
                    </Route>
                    <Route path="/recipes/:id" element={<ShowPage recipes={recipes} updateRecipe={updateRecipe} deleteRecipe={deleteRecipe} />}>
                    </Route>
                </Routes>
            </main>
        </>
    )
}


export default Main