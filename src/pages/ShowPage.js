import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

function ShowPage(props) {
    const navigate = useNavigate()
    const { id } = useParams()
    const recipes = props.recipes
    const recipe = recipes.find(r => r._id === id);

    const [editForm, setEditForm] = useState(recipe)

    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.updateRecipe({ recipe: editForm }, id)
        navigate(`/recipes/${id}`)
    }

    const removeRecipe = () => {
        props.deleteRecipe(id)
        navigate("/recipes")
    }
    return (
        <>
            <div className="recipe-info">
                <div className="recipe-info-image">
                    <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                </div>

                <div className="recipe-details">
                    <h1>{recipe.recipe.label}</h1>
                    <h2> Cuisine: {recipe.recipe.cuisineType}</h2>
                    <h3> Ingredients:</h3>
                    <ul>
                        {recipe.recipe.ingredientLines.map((ingredient, idx) => {
                            return <li key={idx}> {ingredient}</li>;
                        })}
                    </ul>
                </div>
            </div>
            <div className="mt-3">
                {recipe.recipe.dietLabels.length ? (
                    <div>
                        <h3>Diet Labels </h3>
                        <ul className="labels">
                            {recipe.recipe.dietLabels.map((dietLabel, idx) => {
                                return <li key={idx}> {dietLabel}</li>;
                            })}
                        </ul>
                    </div>
                ) : null}
                {recipe.recipe.healthLabels.length ? (
                    <div>
                        <h3>Health Labels </h3>
                        <ul className="labels">
                            {recipe.recipe.healthLabels.map((healthLabel, idx) => {
                                return <li key={idx}> {healthLabel}</li>;
                            })}
                        </ul>
                    </div>
                ) : null}

                {recipe.recipe.cautions.length ? (
                    <div>
                        <h3>Cautions </h3>
                        <ul className="labels">
                            {recipe.recipe.cautions.map((caution, idx) => {
                                return (
                                    <li key={idx} className="cautions">
                                        {" "}
                                        {caution}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ) : null}

                <h3>Calories: {Math.floor(recipe.recipe.calories)} </h3>
            </div>

            <button className="mb-5 mt-5" id="delete" onClick={removeRecipe}>
                Delete Recipe
            </button>

            <form onSubmit={handleSubmit}>
                <label className="form-label"> Name</label>
                <input
                    className="form-control mb-1 mt-2"
                    type="text"
                    value={editForm.label}
                    name="label"
                    onChange={handleChange}
                />
                <label className="form-label"> Cuisine</label>
                <input
                    className="form-control mb-1"
                    type="text"
                    value={editForm.cuisineType}
                    name="cuisineType"
                    onChange={handleChange}
                />
                <label className="form-label"> Image(URL)</label>
                <input
                    className="form-control mb-1"
                    type="text"
                    value={editForm.image}
                    name="image"
                    onChange={handleChange}
                />
                <label className="form-label"> Ingredients </label>
                <input
                    className="form-control mb-1"
                    type="text"
                    value={editForm.ingredientLines}
                    name="ingredientLines"
                    onChange={handleChange}
                />
                <label className="form-label"> Health Labels: </label>
                <input
                    className="form-control mb-1"
                    type="text"
                    value={editForm.healthLabels}
                    name="healthLabels"
                    onChange={handleChange}
                />
                <label className="form-label"> Cautions: </label>
                <input
                    className="form-control mb-1"
                    type="text"
                    value={editForm.cautions}
                    name="cautions"
                    onChange={handleChange}
                />

                <label className="form-label"> Calories: </label>
                <input
                    className="form-control mb-3"
                    type="text"
                    value={editForm.calories}
                    name="calories"
                    onChange={handleChange}
                />
                <button type="submit" id="update" className="mb=5">
                    {" "}
                    Update Recipe{" "}
                </button>
            </form>
        </>
    );
}

export default ShowPage