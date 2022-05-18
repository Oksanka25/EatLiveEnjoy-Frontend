import React from 'react'
import '../App.css';
import { useState } from 'react'
import { Link } from "react-router-dom";



function Home(props) {

    const [newForm, setNewForm] = useState({
        label: "",
        image: "",
        ingredients: "",
    });

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createRecipe(newForm);
        setNewForm({
            label: "",
            image: "",
            ingredients: "",
        });
    };

    const loaded = () => {
        return props.recipes.map((recipe) => (
            <div key={recipe._id} >
                <Link to={`/recipes/${recipe._id}`}>
                    <h1> {recipe.recipe.label}</h1>
                    <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                </Link>
            </div>
        ))
    };

    const loading = () => {
        return <h1>Loading.........</h1>
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='mb-3'>
                <input className='form-control'
                    type="text"
                    value={newForm.label}
                    name="label"
                    placeholder="label"
                    onChange={handleChange}
                />
                <input className='form-control'
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input className='form-control'
                    type="text"
                    value={newForm.ingredients}
                    name="ingredients"
                    placeholder="ingredients"
                    onChange={handleChange}
                />
                <button id="create"> Create Recipe </button>
            </form>

            {props.recipes ? loaded() : loading()}
        </>
    )
}


export default Home