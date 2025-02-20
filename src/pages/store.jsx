import React, { useState } from 'react';
import './store.css'; 
import sonic from '../assets/sonic.png';
import Mjid from '../assets/mjid.jpg';
import recipes from './recipedata';

const Store = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [filterType, setFilterType] = useState(''); // 'calories', 'time', or 'quantity'
    const [sortOrder, setSortOrder] = useState(''); // 'up' or 'down'

    // Extract all unique ingredients from recipes
    const allIngredients = [...new Set(recipes.flatMap(recipe => recipe.ingredients))];

    // Filter ingredients based on the search term
    const filteredIngredients = allIngredients.filter(ingredient =>
        ingredient.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setErrorMessage(''); // Clear error message when typing
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && searchTerm.trim() !== '') {
            const ingredient = searchTerm.trim().toLowerCase();

            if (ingredient === 'mjid') {
                if (!selectedIngredients.includes('mjid')) {
                    setSelectedIngredients([...selectedIngredients, 'mjid']);
                }
            } else {
                // Check if the ingredient exists in the list
                if (!allIngredients.includes(ingredient)) {
                    setErrorMessage(`"${ingredient}" is not a valid ingredient.`);
                    return;
                }

                // Add the ingredient if it's not already selected
                if (!selectedIngredients.includes(ingredient)) {
                    setSelectedIngredients([...selectedIngredients, ingredient]);
                }
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
        setErrorMessage(''); // Clear error message after successful addition
    };

    const removeIngredient = (ingredient) => {
        setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient));
    };

    // Match function (unchanged)
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

    // Function to check if "mjid" is in the list
    const showMjidText = selectedIngredients.includes('mjid');

    // Filter and sort recipes
    const filteredRecipes = recipes
        .map(recipe => {
            const matchPercentage = getMatchPercentage(recipe.ingredients);
            return { ...recipe, matchPercentage };
        })
        .filter(recipe => selectedIngredients.length === 0 || recipe.matchPercentage > 0)
        .sort((a, b) => {
            if (filterType === 'calories') {
                // Sort by calories
                return sortOrder === 'up' ? a.calories - b.calories : b.calories - a.calories;
            } else if (filterType === 'time') {
                // Sort by time
                const timeA = parseInt(a.timeToComplete);
                const timeB = parseInt(b.timeToComplete);
                return sortOrder === 'up' ? timeA - timeB : timeB - timeA;
            } else if (filterType === 'quantity') {
                // Sort by number of ingredients
                const quantityA = a.ingredients.length;
                const quantityB = b.ingredients.length;
                return sortOrder === 'up' ? quantityA - quantityB : quantityB - quantityA;
            } else {
                // Default: Sort by match percentage (highest first)
                return b.matchPercentage - a.matchPercentage;
            }
        });

    return (
        <div className="store-container">
            {/* Filter Controls (Top-Right) */}
            <div className="filter-controls">
                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="filter-dropdown"
                >
                    <option value="">Filter by</option>
                    <option value="calories">Calories</option>
                    <option value="time">Time</option>
                    <option value="quantity">Quantity</option>
                </select>

                <button
                    className={`sort-button ${sortOrder === 'up' ? 'active' : ''}`}
                    onClick={() => setSortOrder('up')}
                >
                    ↑
                </button>
                <button
                    className={`sort-button ${sortOrder === 'down' ? 'active' : ''}`}
                    onClick={() => setSortOrder('down')}
                >
                    ↓
                </button>
            </div>

            {/* Rest of the content */}
            <button className="search-button">
                <input
                    type="text"
                    placeholder="Add ingredients (press Enter to add)"
                    value={searchTerm}
                    onChange={handleSearch}
                    onKeyDown={handleKeyDown}
                    className="search-input"
                />
            </button>

            {/* Error Message */}
            {errorMessage && (
                <div className="error-message">
                    {errorMessage}
                </div>
            )}

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
                <div className='mjid'>
                    <div className="recipe-item">
                        <img src={Mjid} alt="Recipe Name" className="recipe-image" />
                        <div className="recipe-details">
                            <h2>mjid burger</h2>
                            <p>Chef: Chef mjid</p>
                            <p className="recipe-description">ahsan 5obza</p>
                            <div className="match-percentage" style={{ backgroundColor: 'blue' }}>
                                Match: 100%
                            </div>
                            <div className="recipe-rating">
                                Rating: ★★★★★
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Recipe List */}
            <div>
                {selectedIngredients.length === 0 ? (
                    <div className="default-view">
                        <h1>Hmmm, what's in the fridge?</h1>
                        <img 
                            src={sonic} 
                            alt="What's in the fridge?"
                            className="default-image"
                        />
                    </div>
                ) : (
                    filteredRecipes.map(recipe => (
                        <div key={recipe.id} className="recipe-item">
                            <img 
                                src={recipe.image} 
                                alt={recipe.name} 
                                className="recipe-image"
                            />
                            <div className="recipe-details">
                                <h2>{recipe.name}</h2>
                                <p>Chef: {recipe.chef}</p>
                                <p className="recipe-description">{recipe.description}</p>
                                
                                {/* Display Calories and Time */}
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
                                
                                {/* Display Ingredients */}
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