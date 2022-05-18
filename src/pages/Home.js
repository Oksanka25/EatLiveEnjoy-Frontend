import React from 'react'
import '../App.css';
import ShowPage from './ShowPage';
import About from './About';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";



function Home(props) {


    const loaded = () => {
        return props.recipes.map((recipe) => (
            <div key={recipe._id}>
                <Link to={`/recipes/${recipe._id}`}>
                    <h1> {recipe.recipe.label}</h1>
                    <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                </Link>
            </div>
        ))
    }

    const loading = () => {
        return <h1>Loading.........</h1>
    }


    return (
        <>
            {props.recipes ? loaded() : loading()}
        </>
    )
}


export default Home