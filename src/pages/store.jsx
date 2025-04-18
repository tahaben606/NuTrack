"use client"

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, Flame, ChevronUp, ChevronDown, X, Utensils } from 'lucide-react';
import './store.css';
import recipes from './recipedata';

const Store = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [filterType, setFilterType] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Extract all unique ingredients from recipes
  const allIngredients = [...new Set(recipes.flatMap(recipe => recipe.ingredients))];

  // Filter ingredients based on the search term
  const filteredIngredients = allIngredients.filter(ingredient =>
    ingredient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (searchTerm) {
      setIsDropdownVisible(true);
    } else {
      setIsDropdownVisible(false);
    }
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setErrorMessage('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && searchTerm.trim() !== '') {
      addIngredient(searchTerm.trim());
    }
  };

  const addIngredient = (ingredient) => {
    const normalizedIngredient = ingredient.toLowerCase();
    
    if (!allIngredients.some(ing => ing.toLowerCase() === normalizedIngredient)) {
      setErrorMessage(`"${ingredient}" is not a valid ingredient.`);
      return;
    }
    
    if (!selectedIngredients.includes(normalizedIngredient)) {
      setSelectedIngredients([...selectedIngredients, normalizedIngredient]);
    }
    
    setSearchTerm('');
    setErrorMessage('');
    setIsDropdownVisible(false);
  };

  const handleIngredientClick = (ingredient) => {
    addIngredient(ingredient);
  };

  const removeIngredient = (ingredient) => {
    setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient));
  };

  const getMatchPercentage = (recipeIngredients) => {
    if (selectedIngredients.length === 0) return 0;
    const normalizedRecipeIngredients = recipeIngredients.map(ingredient => ingredient.toLowerCase());
    const matchedIngredients = selectedIngredients.filter(ingredient => 
      normalizedRecipeIngredients.some(recipeIng => recipeIng.includes(ingredient))
    ).length;
    return (matchedIngredients / recipeIngredients.length) * 100;
  };

const getMatchColor = (percentage) => {
  if (percentage === 100) return '#673AB7'; // Dark blue to purple
  if (percentage >= 70) return '#4CAF50'; // Green
  if (percentage >= 50) return '#f2e449'; // Softer Yellow
  return '#FF5722'; // Tomato Red
};



  const toggleFilter = (type) => {
    if (filterType === type) {
      setFilterType('');
    } else {
      setFilterType(type);
      if (!sortOrder) setSortOrder('up');
    }
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'up' ? 'down' : 'up');
  };

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
    <div className="store-container">
      <div className="store-header">
        <div className="store-logo">
          <Utensils className="store-logo-icon" />
          <h1>Nutrack</h1>
        </div>
        
        <div className="search-container">
          <div className="search-input-wrapper">
            <Search className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search for ingredients..."
              value={searchTerm}
              onChange={handleSearch}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsDropdownVisible(true)}
            />
            {searchTerm && (
              <button 
                className="clear-search" 
                onClick={() => setSearchTerm('')}
              >
                <X size={16} />
              </button>
            )}
          </div>
          
          {isDropdownVisible && filteredIngredients.length > 0 && (
            <div className="ingredients-dropdown">
              {filteredIngredients.slice(0, 6).map((ingredient, index) => (
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
        </div>
      </div>
      
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      
      <div className="selected-ingredients-container">
        {selectedIngredients.map((ingredient, index) => (
          <div key={index} className="ingredient-tag">
            <span>{ingredient}</span>
            <button onClick={() => removeIngredient(ingredient)}>
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
      
      {selectedIngredients.length > 0 && (
        <div className="filter-controls">
          <div className="filter-buttons">
            <button 
              className={`filter-button ${filterType === 'calories' ? 'active' : ''}`}
              onClick={() => toggleFilter('calories')}
            >
              <Flame size={16} />
              <span>Calories</span>
            </button>
            
            <button 
              className={`filter-button ${filterType === 'time' ? 'active' : ''}`}
              onClick={() => toggleFilter('time')}
            >
              <Clock size={16} />
              <span>Time</span>
            </button>
            
            <button 
              className={`filter-button ${filterType === 'quantity' ? 'active' : ''}`}
              onClick={() => toggleFilter('quantity')}
            >
              <Filter size={16} />
              <span>Ingredients</span>
            </button>
            
            {filterType && (
              <button 
                className="sort-button"
                onClick={toggleSortOrder}
              >
                {sortOrder === 'up' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            )}
          </div>
        </div>
      )}
      
      <div className="recipes-container">
        {selectedIngredients.length === 0 ? (
          <div className="default-view">
            <div className="default-icon">
              <Utensils size={48} />
            </div>
            <h2>What's in your fridge?</h2>
            <p>Add ingredients to find matching recipes</p>
          </div>
        ) : (
          filteredRecipes.length > 0 ? (
            filteredRecipes.map(recipe => (
              <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card-link">
                <div className="recipe-card">
                  <div className="recipe-image-container">
                    <img src={recipe.image || "/placeholder.svg"} alt={recipe.name} className="recipe-image" />
                    <div 
                      className="match-badge"
                      style={{ backgroundColor: getMatchColor(recipe.matchPercentage) }}
                    >
                      {recipe.matchPercentage.toFixed(0)}% Match
                    </div>
                  </div>
                  
                  <div className="recipe-content">
                    <h3 className="recipe-title">{recipe.name}</h3>
                    <p className="recipe-chef">By {recipe.chef}</p>
                    
                    <div className="recipe-meta">
                      <div className="recipe-meta-item">
                        <Flame size={16} className="recipe-meta-icon" />
                        <span>{recipe.calories} kcal</span>
                      </div>
                      <div className="recipe-meta-item">
                        <Clock size={16} className="recipe-meta-icon" />
                        <span>{recipe.timeToComplete}</span>
                      </div>
                    </div>
                    
                    <div className="recipe-rating">
                      {'★'.repeat(Math.floor(recipe.rating))}
                      {'☆'.repeat(5 - Math.floor(recipe.rating))}
                    </div>
                    
                    <div className="recipe-ingredients-preview">
                      <p>Ingredients: {recipe.ingredients.slice(0, 3).join(', ')}
                      {recipe.ingredients.length > 3 ? ` +${recipe.ingredients.length - 3} more` : ''}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="no-results">
              <p>No recipes found with your ingredients</p>
              <p>Try adding different ingredients</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Store;
