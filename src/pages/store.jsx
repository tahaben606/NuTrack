import React, { useState } from 'react';
import './store.css'; // Import the CSS file
import sonic from '../assets/sonic.png';
import Mjid from '../assets/mjid.jpg';
import recipes from './recipedata';

const Store = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [filterType, setFilterType] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  // Extract all unique ingredients from recipes
  const allIngredients = [...new Set(recipes.flatMap(recipe => recipe.ingredients))];

  // Filter ingredients based on the search term
  const filteredIngredients = allIngredients.filter(ingredient =>
    ingredient.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setErrorMessage('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && searchTerm.trim() !== '') {
      const ingredient = searchTerm.trim().toLowerCase();

      if (ingredient === 'mjid') {
        if (!selectedIngredients.includes('mjid')) {
          setSelectedIngredients([...selectedIngredients, 'mjid']);
        }
      } else if (!allIngredients.includes(ingredient)) {
        setErrorMessage(`"${ingredient}" is not a valid ingredient.`);
        return;
      } else if (!selectedIngredients.includes(ingredient)) {
        setSelectedIngredients([...selectedIngredients, ingredient]);
      }

      setSearchTerm('');
      setErrorMessage('');
    }
  };

  const handleIngredientClick = (ingredient) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
    setSearchTerm('');
    setErrorMessage('');
  };

  const removeIngredient = (ingredient) => {
    setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient));
  };

  const getMatchPercentage = (recipeIngredients) => {
    if (selectedIngredients.length === 0) return 0;
    const normalizedRecipeIngredients = recipeIngredients.map(ingredient => ingredient.trim().toLowerCase());
    const matchedIngredients = selectedIngredients.filter(ingredient => normalizedRecipeIngredients.includes(ingredient)).length;
    return (matchedIngredients / recipeIngredients.length) * 100;
  };

  const getMatchColor = (percentage) => {
    if (percentage === 100) return 'blue';
    if (percentage >= 80) return 'green';
    if (percentage > 60) return 'orange';
    return 'tomato';
  };

  const showMjidText = selectedIngredients.includes('mjid');

  const filteredRecipes = recipes
    .map(recipe => {
      const matchPercentage = getMatchPercentage(recipe.ingredients);
      return { ...recipe, matchPercentage };
    })
    .filter(recipe => selectedIngredients.length === 0 || recipe.matchPercentage > 0)
    .sort((a, b) => {
      if (filterType === 'calories') {
        return sortOrder === 'up' ? a.calories - b.calories : b.calories - a.calories;
      } else if (filterType === 'time') {
        const timeA = parseInt(a.timeToComplete);
        const timeB = parseInt(b.timeToComplete);
        return sortOrder === 'up' ? timeA - timeB : timeB - timeA;
      } else if (filterType === 'quantity') {
        const quantityA = a.ingredients.length;
        const quantityB = b.ingredients.length;
        return sortOrder === 'up' ? quantityA - quantityB : quantityB - quantityA;
      } else {
        return b.matchPercentage - a.matchPercentage;
      }
    });

  return (
    <div >
      <div className="input-group">
        <label className="input-group__label" htmlFor="searchInput">Add Ingredients</label>
        <input
          type="text"
          id="searchInput"
          className="input-group__input"
          placeholder="Type an ingredient and press Enter"
          value={searchTerm}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        />
      </div>

      {/* Error Message */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {/* Ingredients Dropdown */}
      {searchTerm && (
        <div className="ingredients-dropdown">
          {filteredIngredients.map((ingredient, index) => (
            <div
              key={index}
              className="ingredient-dropdown-item"
              onClick={() => handleIngredientClick(ingredient)}
            >
              {ingredient}
            </div>
          ))}
        </div>
      )}

      {/* Selected Ingredients */}
      <div className="ingredients-container">
        {selectedIngredients.map((ingredient, index) => (
          <div key={index} className="ingredient-tag">
            <span>{ingredient}</span>
            <button onClick={() => removeIngredient(ingredient)}>×</button>
          </div>
        ))}
      </div>

      {/* Mjid Burger (Special Case) */}
      {showMjidText && (
        <div className="mjid">
          <div className="recipe-item">
            <img src={Mjid} alt="Mjid Burger" className="recipe-image" />
            <div className="recipe-details">
              <h2>mjid burger</h2>
              <p>Chef: Chef mjid</p>
              <p className="recipe-description">ahsan 5obza</p>
              <div className="match-percentage" style={{ backgroundColor: 'blue' }}>
                Match: 100%
              </div>
              <div className="recipe-rating">Rating: ★★★★★</div>
            </div>
          </div>
        </div>
      )}

      {/* Recipe List */}
      <div>
        {selectedIngredients.length === 0 ? (
          <div className="default-view">
            <h1>Hmmm, what's in the fridge?</h1>
            <img src={sonic} alt="What's in the fridge?" className="default-image" />
          </div>
        ) : (
          filteredRecipes.map(recipe => (
            <div key={recipe.id} className="recipe-item">
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
              <div className="recipe-details">
                <h2>{recipe.name}</h2>
                <p>Chef: {recipe.chef}</p>
                <p className="recipe-description">{recipe.description}</p>
                <div className="recipe-info">
                  <p><strong>Calories:</strong> {recipe.calories} kcal</p>
                  <p><strong>Time:</strong> {recipe.timeToComplete}</p>
                </div>
                <div
                  className="match-percentage"
                  style={{ backgroundColor: getMatchColor(recipe.matchPercentage) }}
                >
                  Match: {recipe.matchPercentage.toFixed(0)}%
                </div>
                <div className="recipe-ingredients">
                  <h3>Ingredients:</h3>
                  <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                      <li
                        key={index}
                        className={
                          selectedIngredients.includes(ingredient.toLowerCase())
                            ? 'ingredient-selected'
                            : 'ingredient-not-selected'
                        }
                      >
                        {ingredient}
                        {selectedIngredients.includes(ingredient.toLowerCase()) && (
                          <span className="underline"></span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="recipe-rating">
                  Rating: {'★'.repeat(Math.floor(recipe.rating))}{'☆'.repeat(5 - Math.floor(recipe.rating))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Store;