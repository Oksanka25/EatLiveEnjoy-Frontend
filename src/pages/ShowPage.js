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
            <ul key={recipe.id}>
                {recipe.recipe.ingredientLines.map((ingredient) => {
                    return <li> {ingredient}</li>
                })}
            </ul>

            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <h3>Diet Labels: </h3>
            <ul>
                {recipe.recipe.dietLabels.map((dietLabel) => {
                    return <li> {dietLabel}</li>
                })}
            </ul>
            <h3>Health Labels: </h3>
            <ul>
                {recipe.recipe.healthLabels.map((healthLabel) => {
                    return <li className='healthLabels'> {healthLabel}</li>
                })}
            </ul>
            <p>Cautions: {recipe.recipe.cautions}</p>
            <p>Calories: {Math.floor(recipe.recipe.calories)}</p>



            <button id="delete" onClick={removeRecipe}>
                Delete Recipe
            </button>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.label}
                    name="name"
                    placeholder="label"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.ingredientLines}
                    name="title"
                    placeholder="ingredients"
                    onChange={handleChange}
                />
                <input type="submit" value="Update Recipe" />
            </form>
        </div>
    )
}

export default ShowPage