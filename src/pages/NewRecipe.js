import React from 'react'
import '../App.css';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function NewRecipe(props) {
  const navigate = useNavigate()
  const [newForm, setNewForm] = useState({
    label: "",
    image: "",
    ingredientLines: "",
  });

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createRecipe({ recipe: newForm });
    setNewForm({
      label: "",
      image: "",
      ingredientLines: "",
    });
    navigate("/recipes");
  };


  return (
    <>
      <form onSubmit={handleSubmit} className="flex-wrap recipe-form p-2">
        <div className="d-flex flex-nowrap recipe-input">
          <div className="d-flex input-group">
            <input
              className="form-control me-1 mb-1"
              type="text"
              value={newForm.label}
              name="label"
              placeholder="label"
              onChange={handleChange}
            />
            <input
              className="form-control mb-1"
              type="text"
              value={newForm.cuisineType}
              name="cuisineType"
              placeholder="cuisine"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="form-control mb-1"
              type="text"
              value={newForm.image}
              name="image"
              placeholder="image URL"
              onChange={handleChange}
            />
            <input
              className="form-control mb-1"
              type="text"
              value={newForm.ingredientLines}
              name="ingredientLines"
              placeholder="ingredients"
              onChange={handleChange}
            />
            <input
              className="form-control mb-1"
              type="text"
              value={newForm.healthLabels}
              name="healthLabels"
              placeholder="health labels"
              onChange={handleChange}
            />
          </div>
          <div className="d-flex input-group">
            <input
              className="form-control me-1 mb-1"
              type="text"
              value={newForm.cautions}
              name="cautions"
              placeholder="cautions"
              onChange={handleChange}
            />
            <input
              className="form-control mb-1"
              type="text"
              value={newForm.calories}
              name="calories"
              placeholder="calories"
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="mt-5" id="create">
          {" "}
          Create Recipe{" "}
        </button>
      </form>
    </>
  );
}

export default NewRecipe;