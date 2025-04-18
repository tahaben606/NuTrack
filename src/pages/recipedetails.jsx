"use client"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, Clock, Flame, Star, ChefHat, Utensils } from "lucide-react"
import recipes from "./recipedata"
import "./recipedetails.css"

const RecipeDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const recipe = recipes.find((r) => String(r.id) === String(id))

  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <div className="recipe-not-found-content">
          <Utensils size={48} className="recipe-not-found-icon" />
          <h1>Recipe not found</h1>
          <p>We couldn't find the recipe you're looking for.</p>
          <button className="back-button" onClick={() => navigate("/store")}>
            <ArrowLeft size={16} />
            <span>Back to recipes</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="recipe-details-container">
      <div className="recipe-details-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>

        <div className="recipe-details-title-container">
          <h1 className="recipe-details-title">{recipe.name}</h1>
          <div className="recipe-details-chef">
            <ChefHat size={16} />
            <span>By {recipe.chef}</span>
          </div>
        </div>
      </div>

      <div className="recipe-details-content">
        <div className="recipe-details-main">
          <div className="recipe-details-image-container">
            <img src={recipe.image || "/placeholder.svg"} alt={recipe.name} className="recipe-details-image" />

            <div className="recipe-details-stats">
              <div className="recipe-details-stat">
                <Flame size={18} className="recipe-details-stat-icon" />
                <div className="recipe-details-stat-content">
                  <span className="recipe-details-stat-value">{recipe.calories}</span>
                  <span className="recipe-details-stat-label">Calories</span>
                </div>
              </div>

              <div className="recipe-details-stat">
                <Clock size={18} className="recipe-details-stat-icon" />
                <div className="recipe-details-stat-content">
                  <span className="recipe-details-stat-value">{recipe.timeToComplete.replace(" minutes", "")}</span>
                  <span className="recipe-details-stat-label">Minutes</span>
                </div>
              </div>

              <div className="recipe-details-stat">
                <Star size={18} className="recipe-details-stat-icon" />
                <div className="recipe-details-stat-content">
                  <span className="recipe-details-stat-value">{recipe.rating}</span>
                  <span className="recipe-details-stat-label">Rating</span>
                </div>
              </div>
            </div>
          </div>

          <div className="recipe-details-description">
            <h2>Description</h2>
            <p>{recipe.description}</p>
          </div>

          <div className="recipe-details-steps">
            <h2>Instructions</h2>
            <ol className="recipe-steps-list">
              {recipe.steps.map((step, index) => (
                <li key={index} className="recipe-step-item">
                  <div className="recipe-step-number">{index + 1}</div>
                  <div className="recipe-step-content">{step}</div>
                </li>
              ))}
            </ol>
          </div>

          {recipe.video && (
            <div className="recipe-details-video">
              <h2>Video Tutorial</h2>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="315"
                  src={recipe.video.replace("watch?v=", "embed/")}
                  title="Recipe Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>

        <div className="recipe-details-sidebar">
          <div className="recipe-details-ingredients">
            <h2>Ingredients</h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">
                  <span className="ingredient-name">{ingredient}</span>
                  {recipe.quantities && recipe.quantities[index] && (
                    <span className="ingredient-quantity">{recipe.quantities[index]}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="recipe-details-nutrition">
            <h2>Nutrition Facts</h2>
            <div className="nutrition-item">
              <span className="nutrition-label">Calories</span>
              <span className="nutrition-value">{recipe.calories} kcal</span>
            </div>
            {/* Additional nutrition facts could be added here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails
