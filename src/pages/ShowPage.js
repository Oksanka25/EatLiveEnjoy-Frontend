import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
        props.updateRecipe(editForm, id)
        // redirect people back to index
        navigate('/')
    }

    const removeRecipe = () => {
        props.deleteRecipe(id)
        navigate("/")
    }
    return (
        <div>
            <h1> {recipe.label} </h1>
            <h2> </h2>
        </div>
    )
}

export default ShowPage