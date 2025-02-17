import React, { useState } from 'react';
import './store.css'; // Import the CSS file
import sonic from '../assets/sonic.png'; // Import the image

const Store = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [recipes, setRecipes] = useState([
        // Example recipes data with image URLs
        { 
            id: 1, 
            name: 'Pasta', 
            chef: 'Chef John', 
            description: 'Delicious pasta with tomato sauce.', 
            ingredients: ['tomato', 'pasta', 'basil'], 
            image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
            rating: 5 
        },
        { 
            id: 2, 
            name: 'Pizza', 
            chef: 'Chef Maria', 
            description: 'Classic Margherita pizza.', 
            ingredients: ['tomato', 'cheese', 'basil'], 
            image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
            rating: 4 
        },
        { 
            id: 3, 
            name: 'Burger', 
            chef: 'Chef Alex', 
            description: 'Juicy beef burger with fresh veggies.', 
            ingredients: ['beef', 'lettuce', 'tomato', 'cheese'], 
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
            rating: 4.5 
        },
        // Add more recipes as needed
    ]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && searchTerm.trim() !== '') {
            // Trim and normalize the ingredient
            const ingredient = searchTerm.trim().toLowerCase();
            // Add the ingredient to the selectedIngredients list (if not already present)
            if (!selectedIngredients.includes(ingredient)) {
                setSelectedIngredients([...selectedIngredients, ingredient]);
            }
            setSearchTerm(''); // Clear the search bar
        }
    };

    const removeIngredient = (ingredient) => {
        // Remove the ingredient from the selectedIngredients list
        setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient));
    };

    const getMatchPercentage = (recipeIngredients) => {
        if (selectedIngredients.length === 0) return 0; // No ingredients selected

        // Normalize recipe ingredients
        const normalizedRecipeIngredients = recipeIngredients.map(ingredient => ingredient.trim().toLowerCase());

        // Count how many selected ingredients are in the recipe
        const matchedIngredients = selectedIngredients.filter(ingredient =>
            normalizedRecipeIngredients.includes(ingredient)
        ).length;

        // Calculate match percentage based on the recipe's total ingredients
        return (matchedIngredients / recipeIngredients.length) * 100;
    };

    const getMatchColor = (percentage) => {
        if (percentage === 100) return 'blue';
        if (percentage > 80) return 'green';
        if (percentage > 60) return 'yellow';
        return 'red';
    };

    // Filter recipes based on selected ingredients
    const filteredRecipes = selectedIngredients.length > 0
        ? recipes.map(recipe => {
            const matchPercentage = getMatchPercentage(recipe.ingredients);
            return { ...recipe, matchPercentage };
        }).filter(recipe => recipe.matchPercentage > 0).sort((a, b) => b.matchPercentage - a.matchPercentage)
        : []; // Show no recipes by default (show the default view instead)

    return (
        <div className="store-container">
            <input
                type="text"
                placeholder="Add ingredients (press Enter to add)"
                value={searchTerm}
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
                className="search-input"
            />
            <div className="ingredients-container">
                {selectedIngredients.map((ingredient, index) => (
                    <div
                        key={index}
                        className="ingredient-tag"
                    >
                        <span>{ingredient}</span>
                        <button
                            onClick={() => removeIngredient(ingredient)}
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
            <div>
                {selectedIngredients.length === 0 ? (
                    // Default view when no ingredients are selected
                    <div className="default-view">
                        <h1>Hmmm, what's in the fridge?</h1>
                        <img 
                            src={sonic} // Use the imported image
                            alt="What's in the fridge?"
                            className="default-image"
                        />
                    </div>
                ) : (
                    // Show filtered recipes when ingredients are selected
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
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Store;