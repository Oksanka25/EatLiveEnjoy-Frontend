import React, { useEffect } from 'react'
import '../App.css';
import { useState } from 'react'
import { Link } from "react-router-dom";

function Home(props) {
    const [searchValue, setSearchValue] = useState("");
    const [recipes, setRecipes] = useState(props.recipes || [])

    const loaded = () => {
        return recipes?.map((recipe) => (
          <div className="recipe-item" key={recipe._id}>
            <Link className="recipe-item-link" to={`/recipes/${recipe._id}`}>
              <h4 className="recipe-title"> {recipe.recipe.label}</h4>
              <img
                className="recipe-image"
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
              />
            </Link>
          </div>
        ));
    };

    useEffect(() => {
      setRecipes(props.recipes);
    }, [props.recipes]);

    const loading = () => {
        return <h1>Loading.........</h1>;
    };

    const handleSearch = () => {
        const filteredRecipes = props.recipes.filter((recipe) =>
          recipe.recipe.label.toLowerCase().includes(searchValue.toLowerCase())
        );
        setRecipes(filteredRecipes);
    }

    return (
      <div>
        <div className="search-form d-flex gap-2">
          <input
            className="form-control mb-3 p-2"
            type="text"
            name="search"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            
          />
          <button className="p-2 search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        {props.recipes ? (
          <div className="recipes-list">{loaded()}</div>
        ) : (
          loading()
        )}
      </div>
    );
}
    

export default Home