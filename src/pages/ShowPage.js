import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ShowPage(props) {
    const navigate = useNavigate()
    const { id } = useParams()
    const recipes = props.recipes
    const recipe = recipes.find(r => r._id === id)
    return (
        <div>ShowPage</div>
    )
}

export default ShowPage