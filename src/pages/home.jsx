import { ArrowRight, Utensils, Apple, BarChart2, Calendar, Award, Heart } from "lucide-react"
import "./home.css"

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="logo-container">
                <Utensils className="logo-icon" />
                <h1 className="logo-text">Nutrack</h1>
              </div>
              <h2 className="hero-title">Track Your Nutrition Journey With Ease</h2>
              <p className="hero-subtitle">
                Discover recipes, track nutrients, and achieve your health goals with our all-in-one nutrition platform.
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="hero-stat-number">30+</span>
                  <span className="hero-stat-label">Recipes</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number">5+</span>
                  <span className="hero-stat-label">Happy Users</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number">100%</span>
                  <span className="hero-stat-label">Satisfaction</span>
                </div>
              </div>
              <div className="hero-buttons">
                <a href="/signup" className="primary-button">
                  Get Started <ArrowRight size={16} />
                </a>
                <a href="/store" className="secondary-button">
                  Explore Recipes
                </a>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-image-container">
                <div className="hero-image-background"></div>
                <img
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Healthy food with nutrition tracking"
                  className="hero-image"
                />
                <div className="hero-image-dots"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Wave SVG */}
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>Everything You Need For Better Nutrition</h2>
          <p>Nutrack provides powerful tools to help you make healthier food choices</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Apple />
            </div>
            <h3>Recipe Discovery</h3>
            <p>Find recipes based on ingredients you already have at home</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <BarChart2 />
            </div>
            <h3>Nutrition Tracking</h3>
            <p>Track calories, macros, and micronutrients with ease</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Calendar />
            </div>
            <h3>Meal Planning</h3>
            <p>Plan your meals for the week and generate shopping lists</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Award />
            </div>
            <h3>Goal Setting</h3>
            <p>Set and track your nutrition and health goals</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="section-header">
          <h2>How Nutrack Works</h2>
          <p>Getting started is simple and takes just minutes</p>
        </div>

        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Create Your Profile</h3>
            <p>Sign up and tell us about your dietary preferences and health goals</p>
          </div>

          <div className="step-connector"></div>

          <div className="step">
            <div className="step-number">2</div>
            <h3>Discover Recipes</h3>
            <p>Browse our extensive recipe collection or search by ingredients</p>
          </div>

          <div className="step-connector"></div>

          <div className="step">
            <div className="step-number">3</div>
            <h3>Track Your Nutrition</h3>
            <p>Log your meals and track your progress toward your goals</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>What Our Users Say</h2>
          <p>Join thousands of satisfied users who have transformed their nutrition habits</p>
        </div>

        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                "Nutrack has completely changed how I approach meal planning. I've lost 15 pounds and feel more
                energetic than ever!"
              </p>
            </div>
            <div className="testimonial-author">
              <img src="/placeholder.svg?height=50&width=50" alt="User" className="testimonial-avatar" />
              <div>
                <h4>Sarah Johnson</h4>
                <p>Lost 15 lbs in 3 months</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                "As someone with dietary restrictions, finding suitable recipes was always a challenge. Nutrack makes it
                so easy to filter and find exactly what I need."
              </p>
            </div>
            <div className="testimonial-author">
              <img src="/placeholder.svg?height=50&width=50" alt="User" className="testimonial-avatar" />
              <div>
                <h4>Michael Chen</h4>
                <p>Gluten-free diet</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                "The ingredient-based recipe search is genius! I waste so much less food now because I can find recipes
                using what I already have."
              </p>
            </div>
            <div className="testimonial-author">
              <img src="/placeholder.svg?height=50&width=50" alt="User" className="testimonial-avatar" />
              <div>
                <h4>Emma Rodriguez</h4>
                <p>Home cook</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <Heart className="cta-icon" />
          <h2>Ready to Transform Your Nutrition?</h2>
          <p>Join Nutrack today and take the first step toward a healthier lifestyle.</p>
          <a href="/signup" className="primary-button">
            Get Started For Free <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <Utensils className="logo-icon" />
            <h2 className="logo-text">Nutrack</h2>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Product</h3>
              <ul>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Recipes</a>
                </li>
                <li>
                  <a href="#">Meal Plans</a>
                </li>
                <li>
                  <a href="#">Nutrition Guide</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Support</h3>
              <ul>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nutrack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
