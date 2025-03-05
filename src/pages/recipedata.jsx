const recipes = [
    { 
        id: 1, 
        name: 'Pasta', 
        chef: 'Chef John', 
        description: 'Delicious pasta with tomato sauce.', 
        ingredients: ['tomato', 'pasta', 'basil'], 
        quantities: ['2 cups', '200g', '10g'], 
        calories: 400, 
        timeToComplete: '30 minutes', 
        image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 5,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Cook pasta in boiling salted water until al dente. Drain and set aside.',
            'In a pan, sauté tomatoes until softened. Add basil and season with salt and pepper.',
            'Toss the cooked pasta in the tomato sauce and serve hot.'
        ]
    },
    { 
        id: 2, 
        name: 'Pizza', 
        chef: 'Chef Maria', 
        description: 'Classic Margherita pizza.', 
        ingredients: ['tomato', 'cheese', 'basil'], 
        quantities: ['1 cup', '150g', '10g'], 
        calories: 800, 
        timeToComplete: '45 minutes', 
        image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Preheat the oven to 220°C (425°F).',
            'Spread tomato sauce on the pizza base, then top with cheese and basil.',
            'Bake for 10-12 minutes or until the crust is golden and cheese is bubbly.'
        ]
    },
    { 
        id: 3, 
        name: 'Burger', 
        chef: 'Chef Alex', 
        description: 'Juicy beef burger with fresh veggies.', 
        ingredients: ['beef', 'lettuce', 'tomato', 'cheese'], 
        quantities: ['200g', '50g', '1 slice', '50g'], 
        calories: 600, 
        timeToComplete: '25 minutes', 
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.5,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Form beef into patties and season with salt and pepper.',
            'Grill the patties to your desired doneness.',
            'Assemble the burger with lettuce, tomato, cheese, and your favorite condiments.'
        ]
    },
    { 
        id: 4, 
        name: 'Sushi', 
        chef: 'Chef Yuki', 
        description: 'Traditional Japanese sushi rolls.', 
        ingredients: ['rice', 'salmon', 'nori', 'avocado'], 
        quantities: ['200g', '100g', '2 sheets', '100g'], 
        calories: 500, 
        timeToComplete: '60 minutes', 
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.8,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Prepare sushi rice and let it cool.',
            'Place nori on a bamboo mat, spread rice evenly, and add salmon and avocado slices.',
            'Roll tightly, slice, and serve with soy sauce and wasabi.'
        ]
    },
    { 
        id: 5, 
        name: 'Tacos', 
        chef: 'Chef Carlos', 
        description: 'Authentic Mexican street tacos.', 
        ingredients: ['beef', 'corn tortillas', 'onion', 'cilantro'], 
        quantities: ['200g', '4 tortillas', '100g', '10g'], 
        calories: 450, 
        timeToComplete: '35 minutes', 
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.3,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Cook beef with onions and season with taco spices.',
            'Warm tortillas and fill with the beef mixture.',
            'Top with cilantro and serve with lime wedges.'
        ]
    },
    { 
        id: 6, 
        name: 'Caesar Salad', 
        chef: 'Chef Sophia', 
        description: 'Classic salad with homemade dressing.', 
        ingredients: ['romaine', 'croutons', 'parmesan', 'caesar dressing'], 
        quantities: ['200g', '50g', '50g', '2 tbsp'], 
        calories: 350, 
        timeToComplete: '20 minutes', 
        image: 'https://images.unsplash.com/photo-1576021182211-9ea6d0b6c87e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.0,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Wash and chop romaine lettuce.',
            'Toss lettuce with croutons, parmesan, and Caesar dressing.',
            'Serve immediately and enjoy!'
        ]
    },
    { 
        id: 7, 
        name: 'Pancakes', 
        chef: 'Chef Emily', 
        description: 'Fluffy buttermilk pancakes with maple syrup.', 
        ingredients: ['flour', 'milk', 'egg', 'butter', 'maple syrup'], 
        quantities: ['200g', '1 cup', '1 egg', '30g', '2 tbsp'], 
        calories: 300, 
        timeToComplete: '20 minutes', 
        image: 'https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.6,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Mix flour, milk, and egg to form a smooth batter.',
            'Heat butter in a pan and pour batter to form pancakes.',
            'Cook until golden on both sides, then serve with maple syrup.'
        ]
    },
    { 
        id: 8, 
        name: 'Chicken Curry', 
        chef: 'Chef Raj', 
        description: 'Spicy Indian curry with aromatic spices.', 
        ingredients: ['chicken', 'onion', 'tomato', 'garlic', 'ginger', 'curry powder'], 
        quantities: ['500g', '100g', '200g', '10g', '10g', '2 tbsp'], 
        calories: 550, 
        timeToComplete: '50 minutes', 
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.7,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Sauté onions, garlic, and ginger until fragrant.',
            'Add chicken and cook until browned.',
            'Stir in tomatoes, curry powder, and simmer until chicken is cooked through.'
        ]
    },
    { 
        id: 9, 
        name: 'Chocolate Cake', 
        chef: 'Chef Clara', 
        description: 'Rich moist chocolate layer cake.', 
        ingredients: ['flour', 'cocoa powder', 'sugar', 'eggs', 'butter'], 
        quantities: ['200g', '50g', '200g', '3 eggs', '100g'], 
        calories: 1200, 
        timeToComplete: '90 minutes', 
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.9,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Mix dry ingredients (flour, cocoa powder, sugar) in a bowl.',
            'Add eggs and butter, then mix until smooth.',
            'Bake at 180°C (350°F) for 30-35 minutes. Let cool before serving.'
        ]
    },
    { 
        id: 10, 
        name: 'Ramen', 
        chef: 'Chef Hiroshi', 
        description: 'Hearty Japanese ramen with rich broth.', 
        ingredients: ['ramen noodles', 'pork belly', 'egg', 'green onions', 'miso broth'], 
        quantities: ['200g', '150g', '1 egg', '50g', '2 cups'], 
        calories: 700, 
        timeToComplete: '40 minutes', 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.7,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Cook ramen noodles according to package instructions.',
            'Boil miso broth and add pork belly, cooking until tender.',
            'Serve noodles in broth, topped with a soft-boiled egg and green onions.'
        ]
    },
    { 
        id: 11, 
        name: 'Lasagna', 
        chef: 'Chef Marco', 
        description: 'Layered Italian pasta with meat and cheese.', 
        ingredients: ['lasagna sheets', 'ground beef', 'tomato sauce', 'ricotta', 'mozzarella'], 
        quantities: ['200g', '300g', '2 cups', '200g', '200g'], 
        calories: 850, 
        timeToComplete: '60 minutes', 
        image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.5,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Cook ground beef and mix with tomato sauce.',
            'Layer lasagna sheets, beef mixture, ricotta, and mozzarella in a baking dish.',
            'Bake at 180°C (350°F) for 30-40 minutes until bubbly and golden.'
        ]
    },
    { 
        id: 12, 
        name: 'Pho', 
        chef: 'Chef Linh', 
        description: 'Vietnamese noodle soup with aromatic broth.', 
        ingredients: ['rice noodles', 'beef broth', 'beef slices', 'bean sprouts', 'basil', 'lime'], 
        quantities: ['200g', '4 cups', '150g', '100g', '10g', '1 lime'], 
        calories: 600, 
        timeToComplete: '50 minutes', 
        image: 'https://images.unsplash.com/photo-1585036156171-384f8c5f5b1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.8,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Cook rice noodles according to package instructions.',
            'Heat beef broth and add beef slices, cooking until tender.',
            'Serve noodles in broth, topped with bean sprouts, basil, and a squeeze of lime.'
        ]
    },
    { 
        id: 13, 
        name: 'Fish Tacos', 
        chef: 'Chef Sofia', 
        description: 'Crispy fish tacos with tangy slaw.', 
        ingredients: ['white fish', 'corn tortillas', 'cabbage', 'lime', 'cilantro', 'avocado'], 
        quantities: ['200g', '4 tortillas', '100g', '1 lime', '10g', '100g'], 
        calories: 500, 
        timeToComplete: '30 minutes', 
        image: 'https://images.unsplash.com/photo-1615874694520-8229c35f04c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.6,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Season fish with salt and pepper, then pan-fry until crispy.',
            'Warm tortillas and fill with fish, cabbage, cilantro, and avocado.',
            'Drizzle with lime juice and serve.'
        ]
    },
    { 
        id: 14, 
        name: 'Tiramisu', 
        chef: 'Chef Giuseppe', 
        description: 'Classic Italian dessert with coffee and mascarpone.', 
        ingredients: ['ladyfingers', 'espresso', 'mascarpone', 'cocoa powder', 'eggs', 'sugar'], 
        quantities: ['200g', '1 cup', '250g', '20g', '3 eggs', '100g'], 
        calories: 900, 
        timeToComplete: '90 minutes', 
        image: 'https://images.unsplash.com/photo-1621878998638-1d8b01a1a0d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.9,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Dip ladyfingers in espresso and layer in a dish.',
            'Mix mascarpone, eggs, and sugar to form a creamy mixture.',
            'Layer mascarpone mixture over ladyfingers, dust with cocoa powder, and refrigerate for 2 hours.'
        ]
    },
    { 
        id: 15, 
        name: 'Pad Thai', 
        chef: 'Chef Naree', 
        description: 'Stir-fried rice noodles with tamarind sauce.', 
        ingredients: ['rice noodles', 'shrimp', 'tofu', 'bean sprouts', 'peanuts', 'tamarind paste'], 
        quantities: ['200g', '150g', '100g', '100g', '50g', '2 tbsp'], 
        calories: 700, 
        timeToComplete: '40 minutes', 
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.4,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Soak rice noodles in warm water until soft.',
            'Stir-fry shrimp, tofu, and bean sprouts in a pan.',
            'Add noodles and tamarind paste, tossing until well-coated. Top with crushed peanuts.'
        ]
    },
    { 
        id: 16, 
        name: 'Beef Stew', 
        chef: 'Chef Pierre', 
        description: 'Hearty beef stew with root vegetables.', 
        ingredients: ['beef chuck', 'carrots', 'potatoes', 'onions', 'beef broth', 'thyme'], 
        quantities: ['500g', '200g', '300g', '100g', '4 cups', '1 tsp'], 
        calories: 800, 
        timeToComplete: '120 minutes', 
        image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.5,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Brown beef chuck in a pot, then remove and set aside.',
            'Sauté onions, carrots, and potatoes in the same pot.',
            'Add beef back to the pot, pour in beef broth, and simmer for 2 hours.'
        ]
    },
    { 
        id: 17, 
        name: 'Falafel Wrap', 
        chef: 'Chef Amir', 
        description: 'Crispy falafel in a warm pita with tahini sauce.', 
        ingredients: ['chickpeas', 'pita bread', 'tahini', 'lettuce', 'tomato', 'cucumber'], 
        quantities: ['200g', '2 pitas', '2 tbsp', '50g', '1 tomato', '100g'], 
        calories: 450, 
        timeToComplete: '30 minutes', 
        image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.3,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Blend chickpeas with spices and form into falafel balls. Fry until crispy.',
            'Warm pita bread and fill with falafel, lettuce, tomato, cucumber, and tahini sauce.',
            'Serve immediately.'
        ]
    },
    { 
        id: 18, 
        name: 'Cheesecake', 
        chef: 'Chef Olivia', 
        description: 'Creamy New York-style cheesecake.', 
        ingredients: ['cream cheese', 'sugar', 'eggs', 'graham crackers', 'butter'], 
        quantities: ['500g', '200g', '3 eggs', '200g', '100g'], 
        calories: 1000, 
        timeToComplete: '120 minutes', 
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.9,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Crush graham crackers and mix with melted butter to form the crust.',
            'Mix cream cheese, sugar, and eggs until smooth, then pour over the crust.',
            'Bake at 160°C (325°F) for 1 hour, then refrigerate for 4 hours before serving.'
        ]
    },
    { 
        id: 19, 
        name: 'Shakshuka', 
        chef: 'Chef Yael', 
        description: 'Poached eggs in a spicy tomato and pepper sauce.', 
        ingredients: ['eggs', 'tomatoes', 'bell peppers', 'onion', 'garlic', 'paprika'], 
        quantities: ['4 eggs', '300g', '200g', '100g', '10g', '1 tsp'], 
        calories: 400, 
        timeToComplete: '35 minutes', 
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.6,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Sauté onions, garlic, bell peppers, and tomatoes until softened.',
            'Add paprika and season with salt and pepper.',
            'Crack eggs into the sauce, cover, and cook until eggs are set.'
        ]
    },
    { 
        id: 20, 
        name: 'Chicken Alfredo', 
        chef: 'Chef Luca', 
        description: 'Creamy fettuccine Alfredo with grilled chicken.', 
        ingredients: ['fettuccine', 'chicken breast', 'heavy cream', 'parmesan', 'garlic', 'butter'], 
        quantities: ['200g', '300g', '1 cup', '100g', '10g', '30g'], 
        calories: 850, 
        timeToComplete: '40 minutes', 
        image: 'https://images.unsplash.com/photo-1615846889286-5f7b3b2b2b2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.6,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Cook fettuccine according to package instructions.',
            'Grill chicken breast and slice into strips.',
            'In a pan, melt butter, add garlic, then stir in heavy cream and parmesan. Toss with pasta and chicken.'
        ]
    },
    { 
        id: 21, 
        name: 'Miso Soup', 
        chef: 'Chef Akira', 
        description: 'Traditional Japanese miso soup with tofu and seaweed.', 
        ingredients: ['miso paste', 'tofu', 'seaweed', 'green onions', 'dashi broth'], 
        quantities: ['2 tbsp', '150g', '1 sheet', '50g', '4 cups'], 
        calories: 200, 
        timeToComplete: '20 minutes', 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.2,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Heat dashi broth in a pot until simmering.',
            'Add miso paste and stir until dissolved.',
            'Add tofu, seaweed, and green onions. Serve hot.'
        ]
    },
    { 
        id: 22, 
        name: 'Bibimbap', 
        chef: 'Chef Min-ji', 
        description: 'Korean mixed rice with vegetables and beef.', 
        ingredients: ['rice', 'beef', 'spinach', 'carrots', 'bean sprouts', 'egg', 'gochujang'], 
        quantities: ['200g', '200g', '100g', '100g', '100g', '1 egg', '2 tbsp'], 
        calories: 700, 
        timeToComplete: '45 minutes', 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.7,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Cook rice and set aside.',
            'Sauté beef and vegetables separately.',
            'Assemble rice in a bowl, top with beef, vegetables, and a fried egg. Serve with gochujang.'
        ]
    },
    { 
        id: 23, 
        name: 'Croissant', 
        chef: 'Chef Jacques', 
        description: 'Flaky and buttery French croissants.', 
        ingredients: ['flour', 'butter', 'yeast', 'sugar', 'milk'], 
        quantities: ['200g', '100g', '1 tbsp', '50g', '1/2 cup'], 
        calories: 300, 
        timeToComplete: '180 minutes', 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.8,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Mix flour, yeast, sugar, and milk to form a dough.',
            'Fold butter into the dough and roll into layers.',
            'Shape into croissants, bake at 200°C (400°F) for 15-20 minutes.'
        ]
    },
    { 
        id: 24, 
        name: 'Chicken Tikka Masala', 
        chef: 'Chef Aarav', 
        description: 'Creamy and spicy Indian chicken curry.', 
        ingredients: ['chicken', 'yogurt', 'tomato sauce', 'cream', 'garam masala', 'ginger', 'garlic'], 
        quantities: ['500g', '1 cup', '2 cups', '1/2 cup', '1 tbsp', '10g', '10g'], 
        calories: 750, 
        timeToComplete: '60 minutes', 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.7,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Marinate chicken in yogurt and spices for 1 hour.',
            'Grill chicken until cooked, then simmer in tomato sauce and cream.',
            'Serve with rice or naan.'
        ]
    },
    { 
        id: 25, 
        name: 'Ceviche', 
        chef: 'Chef Carlos', 
        description: 'Fresh Peruvian ceviche with lime-marinated fish.', 
        ingredients: ['white fish', 'lime', 'onion', 'cilantro', 'chili peppers', 'corn', 'sweet potato'], 
        quantities: ['300g', '4 limes', '100g', '10g', '1 pepper', '100g', '100g'], 
        calories: 400, 
        timeToComplete: '30 minutes', 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.5,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Marinate fish in lime juice until opaque.',
            'Add onions, cilantro, and chili peppers.',
            'Serve with boiled corn and sweet potato.'
        ]
    },
    { 
        id: 26, 
        name: 'Apple Pie', 
        chef: 'Chef Emma', 
        description: 'Classic American apple pie with a flaky crust.', 
        ingredients: ['apples', 'sugar', 'cinnamon', 'flour', 'butter', 'lemon juice'], 
        quantities: ['4 apples', '200g', '1 tsp', '200g', '100g', '1 tbsp'], 
        calories: 900, 
        timeToComplete: '90 minutes', 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.9,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Mix sliced apples with sugar, cinnamon, and lemon juice.',
            'Roll out pie crust and fill with apple mixture.',
            'Bake at 180°C (350°F) for 45-50 minutes.'
        ]
    },
    { 
        id: 27, 
        name: 'Paella', 
        chef: 'Chef Javier', 
        description: 'Spanish saffron rice with seafood and chorizo.', 
        ingredients: ['rice', 'shrimp', 'mussels', 'chorizo', 'saffron', 'bell peppers', 'peas'], 
        quantities: ['200g', '200g', '150g', '100g', '1 pinch', '100g', '100g'], 
        calories: 800, 
        timeToComplete: '60 minutes', 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.6,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Sauté chorizo, bell peppers, and peas in a pan.',
            'Add rice, saffron, and broth, then simmer until rice is cooked.',
            'Add shrimp and mussels, cooking until seafood is done.'
        ]
    },
    { 
        id: 28, 
        name: 'Beef Wellington', 
        chef: 'Chef Gordon', 
        description: 'Tender beef fillet wrapped in puff pastry.', 
        ingredients: ['beef fillet', 'puff pastry', 'mushrooms', 'prosciutto', 'mustard', 'egg wash'], 
        quantities: ['500g', '200g', '200g', '4 slices', '2 tbsp', '1 egg'], 
        calories: 1200, 
        timeToComplete: '120 minutes', 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.8,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Sear beef fillet and coat with mustard.',
            'Wrap beef in prosciutto and mushroom duxelles, then encase in puff pastry.',
            'Brush with egg wash and bake at 200°C (400°F) for 25-30 minutes.'
        ]
    },
    { 
        id: 29, 
        name: 'Matcha Latte', 
        chef: 'Chef Yumi', 
        description: 'Creamy matcha green tea latte.', 
        ingredients: ['matcha powder', 'milk', 'honey', 'vanilla extract'], 
        quantities: ['1 tsp', '1 cup', '1 tbsp', '1/2 tsp'], 
        calories: 150, 
        timeToComplete: '10 minutes', 
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
        rating: 4.4,
        video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
        steps: [
            'Whisk matcha powder with hot water until smooth.',
            'Heat milk and mix with matcha, honey, and vanilla extract.',
            'Serve hot or over ice.'
        ]
    },
    // { 
    //     id: 30, 
    //     name: 'Bid u Maticha', 
    //     chef: 'Chef Lamin Yamal', 
    //     description: 'Ahsan bid u maticha.', 
    //     ingredients: ['egg', 'tomato'], 
    //     quantities: ['2 eggs', '200g'], 
    //     calories: 200, 
    //     timeToComplete: '10 minutes', 
    //     image: 'https://www.thedeliciouscrescent.com/wp-content/uploads/2016/01/Moroccan-Eggs-in-Tomato-Sauce-2.jpg', 
    //     rating: 4.4,
    //     video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
    //     steps: [
    //         'Sauté tomatoes in a pan until softened.',
    //         'Crack eggs into the pan and cook until set.',
    //         'Serve hot with bread.'
    //     ]
    // },
    // { 
    //     id: 31, 
    //     name: 'Ma3karona Bichamil', 
    //     chef: 'Chef Dahirajr', 
    //     description: 'Ahsan ma3karona.', 
    //     ingredients: ['pasta', 'cream cheese', 'cheese'], 
    //     quantities: ['300g', '1/2 cup', '1/2 cup'], 
    //     calories: 200, 
    //     timeToComplete: '20 minutes', 
    //     image: 'https://images.unsplash.com/photo-1702827761984-205e57a3a633?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHBhc3RhJTIwd2hpdGUlMjBjcmVhbXxlbnwwfHwwfHx8MA%3D%3D', 
    //     rating: 4.4,
    //     video: 'https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights',
    //     steps: [
    //         'Boil the pasta in salted water until al dente. Drain and set aside.',
    //         'In a pan, heat the cream cheese and add grated cheese. Stir until melted and smooth.',
    //         'Add the cooked pasta to the cheese sauce and mix well.',
    //         'Serve hot and enjoy your delicious Ma3karona Bichamil!'
    //     ]
    // }
];

export default recipes;