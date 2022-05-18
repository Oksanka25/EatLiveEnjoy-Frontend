import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ShowPage(props) {
    const navigate = useNavigate()
    const { id } = useParams()
    const recipes = props.recipes
    const recipe = recipes.find(r => r._id === id);

    const [editForm, setEditForm] = useState(recipe)

    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.label]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.updateRecipe(editForm, id)
        navigate('/recipes')
    }

    const removeRecipe = () => {
        props.deleteRecipe(id)
        navigate("/recipes")
    }
    return (
        <div>
            <h1>{recipe.recipe.label}</h1>
            <h2> Cuisine: {recipe.recipe.cuisineType}</h2>
            <h3> Ingredients:</h3>
            <ul >
                {recipe.recipe.ingredientLines.map((ingredient, idx) => {
                    return <li key={idx}> {ingredient}</li>
                })}
            </ul>

            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <h3>Diet Labels: </h3>
            <ul>
                {recipe.recipe.dietLabels.map((dietLabel, idx) => {
                    return <li key={idx}> {dietLabel}</li>
                })}
            </ul>
            <h3>Health Labels: </h3>
            <ul>
                {recipe.recipe.healthLabels.map((healthLabel, idx) => {
                    return <li key={idx} className='healthLabels'> {healthLabel}</li>
                })}
            </ul>
            <p>Cautions: {recipe.recipe.cautions}</p>
            <p>Calories: {Math.floor(recipe.recipe.calories)}</p>



            <button id="delete" onClick={removeRecipe}>
                Delete Recipe
            </button>

            <form onSubmit={handleSubmit}>
                <input className='form-control mb-1 mt-2'
                    type="text"
                    value={editForm.label}
                    name="name"
                    placeholder="label"
                    onChange={handleChange}
                />
                <input className='form-control mb-1'
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input className='form-control mb-3'
                    type="text"
                    value={editForm.ingredientLines}
                    name="title"
                    placeholder="ingredients"
                    onChange={handleChange}
                />
                <button type="submit" id="update" className='mb=5'> Update Recipe </button>
            </form>
            <h1></h1>
        </div>
    )
}

export default ShowPage