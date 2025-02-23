import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipes from './recipedata'; // Import the recipes data
import './recipedetails.css'; // Import your CSS styles

const RecipeDetails = () => {
  const { id } = useParams(); // Get the `id` parameter from the URL
  const navigate = useNavigate(); // Use navigate to redirect to the store page

  const recipe = recipes.find(r => String(r.id) === String(id)); // Find the recipe by ID

  if (!recipe) {
    return (
      <div className="recipe-details-weird-container">
        <h1>Recipe not found!</h1>
        <p>We couldn't find the recipe you're looking for. Please check the link or try another one.</p>
        <button className="return-button" onClick={() => navigate('/store')}>Return to Store</button>
      </div>
    );
  }

  const defaultImage = "https://via.placeholder.com/150"; // Default image if recipe image is missing

  return (
    <div className="recipe-details-weird-container">
      <div className='top-form'>
        <button className="return-button" onClick={() => navigate('/store')}>
          Return to Store
        </button>
        <h1 className='name'>{recipe.name || 'Recipe name is missing'}</h1>
      </div>
      
      <div className='img'>
        <img 
          src={recipe.image || defaultImage} 
          alt={recipe.name || 'Recipe image'} 
          className="recipe-image" 
        />
      </div>

      <p><strong>Chef:</strong> {recipe.chef || 'Chef information is missing'}</p>
      <p><strong>Description:</strong> {recipe.description || 'Description is missing'}</p>
      <p><strong>Calories:</strong> {recipe.calories || 'Calories information is missing'} kcal</p>
      <p><strong>Time:</strong> {recipe.timeToComplete || 'Time information is missing'}</p>

      <h3>Ingredients:</h3>
      {recipe.ingredients && recipe.ingredients.length > 0 ? (
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      ) : (
        <p>Ingredients are missing</p>
      )}

      <h3>Steps:</h3>
      {recipe.steps && recipe.steps.length > 0 ? (
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      ) : (
        <p>Steps are missing</p>
      )}

      <p>
        <strong>Rating:</strong>{' '}
        {recipe.rating
          ? '★'.repeat(Math.floor(recipe.rating)) + '☆'.repeat(5 - Math.floor(recipe.rating))
          : 'Rating is missing'}
      </p>
      <h3>Recipe Video:</h3>
      {/* Video Section */}
      {recipe.video && (
        <div className="video-container">
          
          <iframe
            width="560"
            height="315"
            src={recipe.video.replace("watch?v=", "embed/")}
            title="Recipe Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
