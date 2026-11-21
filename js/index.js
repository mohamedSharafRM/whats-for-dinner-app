// ! SAMPLE
// var meal = 
// {
//     name        : "Hearty Lential Soup (Vegan)",
//     desc        : "A nutritious, comforting, and flavorful vegan soup packed with vegetables and lentils.",
//     rating      : 4.3,
//     reviews     : 95,
//     prepTime    : 15,
//     cookTime    : 40,
//     servings    : 6,
//     difficulty  : 'Easy',
//     region      : 'Vegan',
//     imgSrc      : "./images/chicken-tikka-masala.webp",
//     ingredients :  [
//         "1 tbsp olive oil",
//         "1 onion, chopped" ,
//         "2 carrots, diced" , 
//         "2 celery stalks, diced",
//         "2 cloves garlic, minced",
//         "1 cup brown or green lentils, rinsed",
//         "6 cups vegetable broth",
//         "1 can (400g) diced tomatoes",
//         "1 tsp dried thyme",
//         "Salt and pepper to taste"
//     ],

//     instructions : [
//         `In a large pot, heat olive oil over medium heat. 
//         Sauté onion, carrots, and celery until softened, about 8 minutes.`,

//         `Add garlic and cook for 1 minute.`,

//         `Stir in rinsed lentils, vegetable broth, diced tomatoes, and thyme.`,

//         `Bring to a boil, then reduce heat and simmer,
//          covered, for 30-40 minutes, or until lentils are tender.`,

//          "Season with salt and pepper. Serve hot with crusty bread."
//     ],

//     chefTips : [
//         "Add a splash of lemon juice before serving for brightness.",
//         "For a thicker soup, mash a portion of the lentils against the side of the pot.",
//         "You can add spinach or kale during the last 10 minutes of simmering."
//     ],

//     nutration : {
//         calories : 280,
//         protien  : 15,
//         carb     : 45,
//         fat      : 5,
//         fiber    : 15,
//         sodium   : 450,
//     },
// };


var meals = [

    // ?? Meal 1
    {
        name: "Hearty Lentil Soup (Vegan)",
        desc: "A nutritious, comforting, and flavorful vegan soup packed with vegetables and lentils.",
        rating: 4.3,
        reviews: 95,
        prepTime: 15,
        cookTime: 40,
        servings: 6,
        difficulty: "Easy",
        region: "Vegan",
        imgSrc: "./images/hearty-lentil-soup.webp",
        ingredients: [
            "1 tbsp olive oil",
            "1 onion, chopped",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "2 cloves garlic, minced",
            "1 cup brown or green lentils, rinsed",
            "6 cups vegetable broth",
            "1 can (400g) diced tomatoes",
            "1 tsp dried thyme",
            "Salt and pepper to taste"
        ],
        instructions: [
            `In a large pot, heat olive oil over medium heat. 
            Sauté onion, carrots, and celery until softened, about 8 minutes.`,
            `Add garlic and cook for 1 minute.`,
            `Stir in rinsed lentils, vegetable broth, diced tomatoes, and thyme.`,
            `Bring to a boil, then reduce heat and simmer,
             covered, for 30-40 minutes, or until lentils are tender.`,
            "Season with salt and pepper. Serve hot with crusty bread."
        ],
        chefTips: [
            "Add a splash of lemon juice before serving for brightness.",
            "For a thicker soup, mash a portion of the lentils against the side of the pot.",
            "You can add spinach or kale during the last 10 minutes of simmering."
        ],
        nutration: {
            calories: 280,
            protien: 15,
            carb: 45,
            fat: 5,
            fiber: 15,
            sodium: 450,
        },
    },

    // ?? Meal 2
    {
        name: "Chicken Tikka Masala",
        desc: "Tender marinated chicken pieces simmered in a rich, creamy, spiced tomato sauce.",
        rating: 4.8,
        reviews: 320,
        prepTime: 25,
        cookTime: 30,
        servings: 4,
        difficulty: "Medium",
        region: "Indian",
        imgSrc: "./images/chicken-tikka-masala.webp",
        ingredients: [
            "600g boneless chicken breast or thigh, cubed",
            "1/2 cup plain yogurt",
            "2 tbsp tikka masala spice blend",
            "1 tbsp ginger-garlic paste",
            "1 can (400g) crushed tomatoes",
            "1/2 cup heavy cream",
            "2 tbsp butter or oil",
            "Fresh cilantro for garnish",
            "Salt to taste"
        ],
        instructions: [
            `Mix yogurt, tikka masala spices, ginger-garlic paste, and salt. 
            Coat chicken and marinate for at least 20 minutes.`,
            `Heat oil in a skillet and sear marinated chicken until browned, then set aside.`,
            `In the same pan, melt butter and add crushed tomatoes; simmer for 10 minutes.`,
            `Stir in heavy cream and return chicken to the sauce. 
            Simmer gently for 8-10 minutes until cooked through.`,
            "Garnish with fresh cilantro and serve with basmati rice or naan."
        ],
        chefTips: [
            "Marinating the chicken overnight makes it significantly juicier.",
            "Adjust chili powder if you prefer a milder or spicier kick.",
            "Toast whole spices briefly before grinding for extra aroma."
        ],
        nutration: {
            calories: 460,
            protien: 34,
            carb: 16,
            fat: 29,
            fiber: 3,
            sodium: 680,
        },
    },

    // ?? Meal 3
    {
        name: "Classic Margherita Pizza",
        desc: "Crispy wood-fired style crust topped with San Marzano tomatoes, fresh mozzarella, and basil.",
        rating: 4.7,
        reviews: 215,
        prepTime: 20,
        cookTime: 15,
        servings: 2,
        difficulty: "Medium",
        region: "Italian",
        imgSrc: "./images/Classic-Margherita-Pizza.avif",
        ingredients: [
            "1 pizza dough ball (about 300g)",
            "1/2 cup crushed tomato sauce",
            "150g fresh mozzarella, sliced or torn",
            "Fresh basil leaves",
            "1 tbsp extra virgin olive oil",
            "Pinch of salt and dried oregano"
        ],
        instructions: [
            `Preheat your oven to its highest setting (around 250°C / 480°F) with a baking sheet inside.`,
            `Stretch the pizza dough into a 10-12 inch round on parchment paper.`,
            `Spread a thin layer of tomato sauce, season with a pinch of salt, and arrange mozzarella on top.`,
            `Transfer to the hot baking sheet and bake for 10-15 minutes until bubbly and golden.`,
            "Top with fresh basil leaves and a drizzle of olive oil before slicing."
        ],
        chefTips: [
            "Pat fresh mozzarella dry with paper towels so the pizza doesn't get soggy.",
            "Don't overload the sauce; a thin layer keeps the crust crisp.",
            "Let the dough sit at room temperature for 30 minutes before stretching."
        ],
        nutration: {
            calories: 590,
            protien: 24,
            carb: 72,
            fat: 22,
            fiber: 4,
            sodium: 920,
        },
    },

    // ?? Meal 4
    {
        name: "Grilled Salmon with Lemon Herb Butter",
        desc: "Flaky pan-seared or grilled salmon fillets finished with garlic lemon herb butter.",
        rating: 4.9,
        reviews: 178,
        prepTime: 10,
        cookTime: 12,
        servings: 2,
        difficulty: "Easy",
        region: "Mediterranean",
        imgSrc: "./images/Grilled-Salmon-with-Lemon-Herb-Butter.avif",
        ingredients: [
            "2 salmon fillets (about 170g each)",
            "2 tbsp unsalted butter, softened",
            "2 cloves garlic, finely minced",
            "1 tbsp fresh dill or parsley, chopped",
            "1 tbsp lemon juice plus lemon wedges",
            "1 tbsp olive oil",
            "Salt and black pepper to taste"
        ],
        instructions: [
            `Pat salmon dry and season both sides with salt and black pepper.`,
            `Mix softened butter, minced garlic, chopped herbs, and lemon juice in a small bowl.`,
            `Heat olive oil in a skillet over medium-high heat and place salmon skin-side down.`,
            `Cook for 4-5 minutes until crispy, flip, and cook another 3-4 minutes.`,
            "Spoon the herb butter over the hot salmon and serve with lemon wedges."
        ],
        chefTips: [
            "Avoid moving the fillet too soon so a nice crust forms.",
            "Remove salmon when internal temperature hits 52°C-55°C for tender results.",
            "Pair with roasted asparagus or quinoa for a balanced meal."
        ],
        nutration: {
            calories: 440,
            protien: 38,
            carb: 2,
            fat: 30,
            fiber: 12,
            sodium: 310,
        },
    },

    // ?? Meal 5
    {
        name: "Beef Tacos Al Pastor Style",
        desc: "Savory marinated beef strips served in warm corn tortillas with pineapple, onion, and cilantro.",
        rating: 4.6,
        reviews: 142,
        prepTime: 20,
        cookTime: 15,
        servings: 4,
        difficulty: "Easy",
        region: "Mexican",
        imgSrc: "./images/Beef-Tacos-Al-Pastor-Style.avif",
        ingredients: [
            "500g flank steak, thinly sliced",
            "8 small corn tortillas",
            "1/2 cup pineapple chunks, finely diced",
            "1/2 white onion, finely chopped",
            "1/3 cup fresh cilantro, chopped",
            "1 tbsp chili powder",
            "1 tsp cumin",
            "1 tbsp cooking oil",
            "Lime wedges for serving"
        ],
        instructions: [
            `Toss sliced beef with chili powder, cumin, and a pinch of salt.`,
            `Heat oil in a large skillet over high heat and sear beef in batches for 4-6 minutes.`,
            `Warm corn tortillas in a dry pan for 20-30 seconds per side.`,
            `Fill tortillas with beef, diced pineapple, onion, and cilantro.`,
            "Serve immediately with fresh lime wedges."
        ],
        chefTips: [
            "Char the pineapple pieces lightly in the pan for sweeter caramelization.",
            "Double up tortillas if you prefer extra sturdiness.",
            "Add sliced jalapeños or salsa verde for extra heat."
        ],
        nutration: {
            calories: 410,
            protien: 31,
            carb: 34,
            fat: 16,
            fiber: 5,
            sodium: 520,
        },
    },
    // ?? Meal 6
    {
        name: "Spaghetti Carbonara",
        desc: "Silky Roman pasta tossed with crispy pancetta, egg yolks, Pecorino Romano, and black pepper.",
        rating: 4.8,
        reviews: 260,
        prepTime: 10,
        cookTime: 15,
        servings: 4,
        difficulty: "Medium",
        region: "Italian",
        imgSrc: "./images/Spaghetti-Carbonara.avif",
        ingredients: [
            "400g spaghetti",
            "150g pancetta or guanciale, diced",
            "3 large egg yolks + 1 whole egg",
            "3/4 cup grated Pecorino Romano or Parmesan",
            "1 tsp freshly cracked black pepper",
            "Salt for pasta water"
        ],
        instructions: [
            `Boil spaghetti in salted water until al dente; reserve 1 cup of pasta cooking water.`,
            `Crisp the diced pancetta in a skillet over medium heat for about 6-8 minutes, then turn off heat.`,
            `Whisk egg yolks, whole egg, grated cheese, and black pepper in a bowl.`,
            `Toss hot drained pasta with pancetta, remove from heat, and quickly stir in the egg mixture.`,
            "Add splashes of reserved pasta water until a glossy sauce coats the noodles; serve right away."
        ],
        chefTips: [
            "Keep the pan off direct high heat when adding eggs so they don't scramble.",
            "Reserved starchy pasta water is the secret to a smooth emulsion.",
            "Use freshly grated cheese rather than pre-grated for better melting."
        ],
        nutration: {
            calories: 560,
            protien: 25,
            carb: 68,
            fat: 20,
            fiber: 3,
            sodium: 640,
        },
    },

    // ?? Meal 7
    {
        name: "Mediterranean Quinoa Buddha Bowl",
        desc: "Wholesome grain bowl layered with fluffy quinoa, chickpeas, cucumber, cherry tomatoes, and tahini drizzle.",
        rating: 4.5,
        reviews: 118,
        prepTime: 15,
        cookTime: 20,
        servings: 3,
        difficulty: "Easy",
        region: "Vegan",
        imgSrc: "./images/Mediterranean-Quinoa-Buddha-Bowl.avif",
        ingredients: [
            "1 cup quinoa, rinsed",
            "2 cups vegetable broth or water",
            "1 can (400g) chickpeas, drained and rinsed",
            "1 cup cherry tomatoes, halved",
            "1 cucumber, diced",
            "2 tbsp tahini",
            "1 tbsp lemon juice",
            "Salt and pepper to taste"
        ],
        instructions: [
            `Simmer rinsed quinoa in vegetable broth for 15 minutes until liquid is absorbed, then fluff.`,
            `Whisk tahini, lemon juice, 2 tbsp warm water, and a pinch of salt to make a smooth dressing.`,
            `Divide quinoa among bowls and top with chickpeas, cherry tomatoes, and cucumber.`,
            `Drizzle generously with the tahini dressing.`,
            "Season with black pepper and serve warm or chilled."
        ],
        chefTips: [
            "Toast chickpeas with cumin and paprika in a pan for extra crunch.",
            "Add kalamata olives or avocado slices for extra richness.",
            "Whisking tahini with a little warm water makes it creamy instead of clumpy."
        ],
        nutration: {
            calories: 390,
            protien: 16,
            carb: 54,
            fat: 13,
            fiber: 11,
            sodium: 390,
        },
    },

    // ?? Meal 8
    {
        name: "Crispy Garlic Butter Shrimp Stir-Fry",
        desc: "Juicy shrimp sautéed quickly with garlic, bell peppers, and snap peas in a savory glaze.",
        rating: 4.7,
        reviews: 154,
        prepTime: 15,
        cookTime: 10,
        servings: 4,
        difficulty: "Easy",
        region: "Asian",
        imgSrc: "./images/Crispy-Garlic-Butter-Shrimp-Stir-Fry.avif",
        ingredients: [
            "500g large shrimp, peeled and deveined",
            "4 cloves garlic, minced",
            "1 red bell pepper, sliced",
            "1 cup snap peas",
            "2 tbsp soy sauce",
            "1 tbsp honey or brown sugar",
            "1 tbsp sesame or olive oil",
            "1 tbsp butter",
            "Sesame seeds for garnish"
        ],
        instructions: [
            `Pat shrimp dry and season lightly with salt and pepper.`,
            `Heat oil in a wok or large skillet over high heat and sear shrimp for 1.5-2 minutes per side; remove.`,
            `Add bell pepper and snap peas to the pan and stir-fry for 3 minutes until crisp-tender.`,
            `Add garlic, soy sauce, honey, and butter, stirring until melted and bubbly.`,
            "Return shrimp to toss in the glaze, top with sesame seeds, and serve hot."
        ],
        chefTips: [
            "Don't overcook shrimp—they turn rubbery quickly once pink and curled.",
            "Prep all veggies and sauces before turning on the heat for fast stir-frying.",
            "Serve over steamed jasmine rice or noodles."
        ],
        nutration: {
            calories: 310,
            protien: 29,
            carb: 18,
            fat: 13,
            fiber: 3,
            sodium: 790,
        },
    }
];

var lastIndex = -1; // can be undefined
function generateRandom(){
    var randomNumber = Math.floor(Math.random() * meals.length);

    
    while(randomNumber === lastIndex) 
    {
        randomNumber = Math.floor(Math.random() * meals.length);
    }

    lastIndex = randomNumber;

    // console.log(randomNumber);

    displayMeal(randomNumber);
}

function displayMeal(index){
    var meal = meals[index];
    // console.log(meal);

    // static rendering
    // document.getElementById('imgSrc').setAttribute('src',meal.imgSrc);
    // document.getElementById('name').innerHTML = meal.name;
    // document.getElementById('desc').innerHTML = meal.desc;
    var isExtended = meal.prepTime + meal.cookTime > 45;

    if(isExtended === true)
    {
        document.getElementById('time-warning').classList.add('d-block');
        document.getElementById('time-warning').classList.remove('d-none');
    }
    else{
        document.getElementById('time-warning').classList.add('d-none');
        document.getElementById('time-warning').classList.remove('d-block');
    }

    for(var propertyName in meal){
        if(propertyName === "imgSrc"){
            document.getElementById(propertyName).setAttribute("src",meal[propertyName]);
        }

        else if(propertyName === "ingredients" || propertyName === "instructions" || propertyName === "chefTips"){
            var cartona = '';
            for(var i = 0; i < meal[propertyName].length; i++){
                if(propertyName === "chefTips")
                {
                    cartona += `
                        <li class="alert alert-warning d-flex align-items-center gap-2-half">
                            <div class="alert-warning-icon">
                                <i class="fa-solid fa-circle-check fs-5"></i>
                            </div>
                            <p class="mb-0 fs-6">${meal[propertyName][i]}</p>
                        </li>
                    `
                }
                else if(propertyName === "instructions")
                {
                    cartona += `
                        <li class="d-flex align-items-center gap-2-half">
                            <div class="number-holder d-flex justify-content-center align-items-center text-white rounded-4 fw-bold fs-5">
                                ${i + 1}
                            </div>
                            <p class="mb-0">${meal[propertyName][i]}</p>
                        </li>          
                `
                }
                else
                {
                    cartona += `
                        <li class="d-flex align-items-center gap-2-half">
                            <div class="number-holder d-flex justify-content-center align-items-center text-white rounded-circle fw-bold">
                                ${i + 1}
                            </div>
                            <p class="mb-0">${meal[propertyName][i]}</p>
                        </li>
                    `
                }
                // cartona += meal[propertyName][i];
            }
           document.getElementById(propertyName).innerHTML = cartona;
            
        }

        else if(propertyName === "nutration"){
            for(var nutrationPropName in meal[propertyName])
            {
                var nutrationObject = meal[propertyName];
                // console.log(nutrationObject);
                document.getElementById(nutrationPropName).innerHTML = nutrationObject[nutrationPropName]
            }
        }
        
        else{
            document.getElementById(propertyName).innerHTML = meal[propertyName];
        }
    }   
}

generateRandom();