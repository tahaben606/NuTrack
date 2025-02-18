import React, { useState } from 'react';
import './store.css'; // Import the CSS file
import sonic from '../assets/sonic.png'; // Import the image
import Mjid from '../assets/mjid.jpg';

const Store = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [recipes, setRecipes] = useState([
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
    ]);

    // Extract all unique ingredients from recipes
    const allIngredients = [...new Set(recipes.flatMap(recipe => recipe.ingredients))];

    // Filter ingredients based on search term
    const filteredIngredients = allIngredients.filter(ingredient =>
        ingredient.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && searchTerm.trim() !== '') {
            const ingredient = searchTerm.trim().toLowerCase();
            if (!selectedIngredients.includes(ingredient)) {
                setSelectedIngredients([...selectedIngredients, ingredient]);
            }
            setSearchTerm('');
        }
    };

    const handleIngredientClick = (ingredient) => {
        if (!selectedIngredients.includes(ingredient)) {
            setSelectedIngredients([...selectedIngredients, ingredient]);
        }
        setSearchTerm('');
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
        if (percentage > 80) return 'green';
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
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Store;
