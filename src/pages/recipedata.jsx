const recipes = [
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
    { 
        id: 4, 
        name: 'Sushi', 
        chef: 'Chef Yuki', 
        description: 'Traditional Japanese sushi rolls.', 
        ingredients: ['rice', 'salmon', 'nori', 'avocado'], 
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.8 
    },
    { 
        id: 5, 
        name: 'Tacos', 
        chef: 'Chef Carlos', 
        description: 'Authentic Mexican street tacos.', 
        ingredients: ['beef', 'corn tortillas', 'onion', 'cilantro'], 
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.3 
    },
    { 
        id: 6, 
        name: 'Caesar Salad', 
        chef: 'Chef Sophia', 
        description: 'Classic salad with homemade dressing.', 
        ingredients: ['romaine', 'croutons', 'parmesan', 'caesar dressing'], 
        image: 'https://images.unsplash.com/photo-1576021182211-9ea6d0b6c87e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.0 
    },
    { 
        id: 7, 
        name: 'Pancakes', 
        chef: 'Chef Emily', 
        description: 'Fluffy buttermilk pancakes with maple syrup.', 
        ingredients: ['flour', 'milk', 'egg', 'butter', 'maple syrup'], 
        image: 'https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.6 
    },
    { 
        id: 8, 
        name: 'Chicken Curry', 
        chef: 'Chef Raj', 
        description: 'Spicy Indian curry with aromatic spices.', 
        ingredients: ['chicken', 'onion', 'tomato', 'garlic', 'ginger', 'curry powder'], 
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.7 
    },
    { 
        id: 9, 
        name: 'Chocolate Cake', 
        chef: 'Chef Clara', 
        description: 'Rich moist chocolate layer cake.', 
        ingredients: ['flour', 'cocoa powder', 'sugar', 'eggs', 'butter'], 
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.9 
        },
    { 
        id: 10, 
        name: 'Ramen', 
        chef: 'Chef Hiroshi', 
        description: 'Hearty Japanese ramen with rich broth.', 
        ingredients: ['ramen noodles', 'pork belly', 'egg', 'green onions', 'miso broth'], 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.7 
    },
    { 
        id: 11, 
        name: 'Lasagna', 
        chef: 'Chef Marco', 
        description: 'Layered Italian pasta with meat and cheese.', 
        ingredients: ['lasagna sheets', 'ground beef', 'tomato sauce', 'ricotta', 'mozzarella'], 
        image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.5 
    },
    { 
        id: 12, 
        name: 'Pho', 
        chef: 'Chef Linh', 
        description: 'Vietnamese noodle soup with aromatic broth.', 
        ingredients: ['rice noodles', 'beef broth', 'beef slices', 'bean sprouts', 'basil', 'lime'], 
        image: 'https://images.unsplash.com/photo-1585036156171-384f8c5f5b1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.8 
    },
    { 
        id: 13, 
        name: 'Fish Tacos', 
        chef: 'Chef Sofia', 
        description: 'Crispy fish tacos with tangy slaw.', 
        ingredients: ['white fish', 'corn tortillas', 'cabbage', 'lime', 'cilantro', 'avocado'], 
        image: 'https://images.unsplash.com/photo-1615874694520-8229c35f04c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.6 
    },
    { 
        id: 14, 
        name: 'Tiramisu', 
        chef: 'Chef Giuseppe', 
        description: 'Classic Italian dessert with coffee and mascarpone.', 
        ingredients: ['ladyfingers', 'espresso', 'mascarpone', 'cocoa powder', 'eggs', 'sugar'], 
        image: 'https://images.unsplash.com/photo-1621878998638-1d8b01a1a0d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.9 
    },
    { 
        id: 15, 
        name: 'Pad Thai', 
        chef: 'Chef Naree', 
        description: 'Stir-fried rice noodles with tamarind sauce.', 
        ingredients: ['rice noodles', 'shrimp', 'tofu', 'bean sprouts', 'peanuts', 'tamarind paste'], 
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.4 
    },
    { 
        id: 16, 
        name: 'Beef Stew', 
        chef: 'Chef Pierre', 
        description: 'Hearty beef stew with root vegetables.', 
        ingredients: ['beef chuck', 'carrots', 'potatoes', 'onions', 'beef broth', 'thyme'], 
        image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.5 
    },
    { 
        id: 17, 
        name: 'Falafel Wrap', 
        chef: 'Chef Amir', 
        description: 'Crispy falafel in a warm pita with tahini sauce.', 
        ingredients: ['chickpeas', 'pita bread', 'tahini', 'lettuce', 'tomato', 'cucumber'], 
        image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.3 
    },
    { 
        id: 18, 
        name: 'Cheesecake', 
        chef: 'Chef Olivia', 
        description: 'Creamy New York-style cheesecake.', 
        ingredients: ['cream cheese', 'sugar', 'eggs', 'graham crackers', 'butter'], 
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.9 
    },
    { 
        id: 19, 
        name: 'Shakshuka', 
        chef: 'Chef Yael', 
        description: 'Poached eggs in a spicy tomato and pepper sauce.', 
        ingredients: ['eggs', 'tomatoes', 'bell peppers', 'onion', 'garlic', 'paprika'], 
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.6 
        },
    { 
        id: 20, 
        name: 'Chicken Alfredo', 
        chef: 'Chef Luca', 
        description: 'Creamy fettuccine Alfredo with grilled chicken.', 
        ingredients: ['fettuccine', 'chicken breast', 'heavy cream', 'parmesan', 'garlic', 'butter'], 
        image: 'https://images.unsplash.com/photo-1615846889286-5f7b3b2b2b2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.6 
    },
    { 
        id: 21, 
        name: 'Miso Soup', 
        chef: 'Chef Akira', 
        description: 'Traditional Japanese miso soup with tofu and seaweed.', 
        ingredients: ['miso paste', 'tofu', 'seaweed', 'green onions', 'dashi broth'], 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.2 
    },
    { 
        id: 22, 
        name: 'Bibimbap', 
        chef: 'Chef Min-ji', 
        description: 'Korean mixed rice with vegetables and beef.', 
        ingredients: ['rice', 'beef', 'spinach', 'carrots', 'bean sprouts', 'egg', 'gochujang'], 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.7 
    },
    { 
        id: 23, 
        name: 'Croissant', 
        chef: 'Chef Jacques', 
        description: 'Flaky and buttery French croissants.', 
        ingredients: ['flour', 'butter', 'yeast', 'sugar', 'milk'], 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.8 
    },
    { 
        id: 24, 
        name: 'Chicken Tikka Masala', 
        chef: 'Chef Aarav', 
        description: 'Creamy and spicy Indian chicken curry.', 
        ingredients: ['chicken', 'yogurt', 'tomato sauce', 'cream', 'garam masala', 'ginger', 'garlic'], 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.7 
    },
    { 
        id: 25, 
        name: 'Ceviche', 
        chef: 'Chef Carlos', 
        description: 'Fresh Peruvian ceviche with lime-marinated fish.', 
        ingredients: ['white fish', 'lime', 'onion', 'cilantro', 'chili peppers', 'corn', 'sweet potato'], 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.5 
    },
    { 
        id: 26, 
        name: 'Apple Pie', 
        chef: 'Chef Emma', 
        description: 'Classic American apple pie with a flaky crust.', 
        ingredients: ['apples', 'sugar', 'cinnamon', 'flour', 'butter', 'lemon juice'], 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.9 
    },
    { 
        id: 27, 
        name: 'Paella', 
        chef: 'Chef Javier', 
        description: 'Spanish saffron rice with seafood and chorizo.', 
        ingredients: ['rice', 'shrimp', 'mussels', 'chorizo', 'saffron', 'bell peppers', 'peas'], 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.6 
    },
    { 
        id: 28, 
        name: 'Beef Wellington', 
        chef: 'Chef Gordon', 
        description: 'Tender beef fillet wrapped in puff pastry.', 
        ingredients: ['beef fillet', 'puff pastry', 'mushrooms', 'prosciutto', 'mustard', 'egg wash'], 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.8 
    },
    { 
        id: 29, 
        name: 'Matcha Latte', 
        chef: 'Chef Yumi', 
        description: 'Creamy matcha green tea latte.', 
        ingredients: ['matcha powder', 'milk', 'honey', 'vanilla extract'], 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.4 
    },
    { 
        id: 30, 
        name: 'bid u maticha', 
        chef: 'Chef lamin yamal', 
        description: 'ahsan bid u maticha.', 
        ingredients: ['egg','tomato'], 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.4 
    }

];

export default recipes;