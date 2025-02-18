import React, { useState } from 'react';
import './store.css'; // Import the CSS file
import sonic from '../assets/sonic.png'; // Import the image
import Mjid from '../assets/mjid.jpg';
import recipes from './recipedata'; // Import the recipes data

const Store = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [errorMessage, setErrorMessage] = useState(''); // State for error messages

    // Extract all unique ingredients from recipes
    const allIngredients = [...new Set(recipes.flatMap(recipe => recipe.ingredients))];

    // Filter ingredients based on search term
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

            // Check if the ingredient exists in the allIngredients list
            if (!allIngredients.includes(ingredient)) {
                setErrorMessage(`"${ingredient}" is not a valid ingredient.`);
                return; // Stop further execution
            }

            // Add the ingredient if it's not already selected
            if (!selectedIngredients.includes(ingredient)) {
                setSelectedIngredients([...selectedIngredients, ingredient]);
            }

            setSearchTerm('');
            setErrorMessage(''); // Clear error message after successful addition
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

    const filteredRecipes = selectedIngredients.length > 0
        ? recipes.map(recipe => {
            const matchPercentage = getMatchPercentage(recipe.ingredients);
            return { ...recipe, matchPercentage };
        }).filter(recipe => recipe.matchPercentage > 0).sort((a, b) => b.matchPercentage - a.matchPercentage)
        : [];

    return (
        <div className="store-container">
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

            {/* Display error message if any */}
            {errorMessage && (
                <div className="error-message">
                    {errorMessage}
                </div>
            )}

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

            <div className="ingredients-container">
                {selectedIngredients.map((ingredient, index) => (
                    <div key={index} className="ingredient-tag">
                        <span>{ingredient}</span>
                        <button onClick={() => removeIngredient(ingredient)}>×</button>
                    </div>
                ))}
            </div>

            {/* Display "yes" only when "mjid" is entered */}
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
                                <div 
                                    className="match-percentage"
                                    style={{ backgroundColor: getMatchColor(recipe.matchPercentage) }}
                                >
                                    Match: {recipe.matchPercentage.toFixed(0)}%
                                </div>
                                <div className="recipe-rating">
                                    Rating: {'★'.repeat(Math.floor(recipe.rating))}{'☆'.repeat(5 - Math.floor(recipe.rating))}
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
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Store;