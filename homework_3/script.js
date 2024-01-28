/* Exercise 1
   There is a JSON file with students. Make a call to the file and get the following data from it: (requirements written below, in the solution)

   Use higher order functions to find the answers Link: https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json   
*/

fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json ")
.then(response => {
    if(!response.ok) {
        throw new Error("There's something wrong with the network or the server.");
    }

    return response.json();
})
.then(response => {
    console.log(response);

    // All students with an average grade higher than 3
    let studentsWithAverageGradeAbove3 = response.filter(student => student.averageGrade > 3);
    console.log(studentsWithAverageGradeAbove3);

    // All female student names with an average grade of 5
    let femaleNamesWithAverage5 = response.filter(student => (student.gender.toLowerCase() === 'female') && (student.averageGrade === 5)).map(student => student.firstName);
    console.log(femaleNamesWithAverage5);

    // All male student full names who live in Skopje and are over 18 years old
    let maleFullNamesOver18inSkopje = response.filter(student => (student.gender.toLowerCase() === 'male') && (student.city.toLowerCase() === 'skopje') && (student.age > 18)).map(student => `${student.firstName} ${student.lastName}`);
    console.log(maleFullNamesOver18inSkopje);

    // The average grades of all female students over the age of 24
    let femalesOver24averageGrades = response.filter (student => (student.gender.toLowerCase() === 'female') && (student.age > 24)).map(student => student.averageGrade);
    console.log(femalesOver24averageGrades);

    // All male students with a name starting with B and average grade over 2
    let bMalesWithAverageOver2 = response.filter(student => (student.gender.toLowerCase() === 'male') && (student.firstName.startsWith('B')) && (student.averageGrade > 2));
    console.log(bMalesWithAverageOver2);

    // Student emails of all female students with age between 20 and 30 years, ordered ascending
    let femaleEmailsBetween20and30ascending = response.filter(student => (student.gender.toLowerCase() === 'female') && (20 < student.age) && (student.age < 30)).map(student => student.email).sort((a,b) => a.localeCompare(b, 'en'));
    console.log(femaleEmailsBetween20and30ascending);

    // Students full names of students above 40, ordered descending
    let studentsFullNamesOver40Descending = response.filter(student => student.age > 40).map(student => `${student.firstName} ${student.lastName}`).sort((a,b) => b.localeCompare(a, 'en'));
    console.log(studentsFullNamesOver40Descending);

    // Count of students using google mail
    let studentsWithGoogleMail = response.filter(student => student.email.includes('google')).length;
    console.log(studentsWithGoogleMail);

    // The average age of female students living in Skopje
    let femalesInSkopje = response.filter(student => (student.gender.toLowerCase() === 'female') && (student.city.toLowerCase() === 'skopje'));
    let averageAge = femalesInSkopje.reduce((acc, curr) => acc + curr.age, 0) / femalesInSkopje.length;
    console.log(femalesInSkopje);
    console.log(averageAge);
})
.catch(error => console.log(error));



/* Exercise 2
   There is a JSON with products. Make a call and get the following data from it: (requirements written below, in the solution)

   Link: https://dummyjson.com/products
*/

fetch("https://dummyjson.com/products")
.then(response => {
    if(!response.ok) {
        throw new Error("There's something wrong with the network or the server.");
    }

    return response.json();
})
.then(response => {
    console.log(response);

    let result = response.products;
    console.log(result);

    let copiedProducts = result.slice(); // used later, for some requirements

    // All laptops, ordered by price descending
    let laptopsDescending = result.filter(product => product.category === 'laptops').sort((a,b) => b.price - a.price);
    console.log(laptopsDescending);

    // The first grocery item
    let firstGroceryItem = result.find(type => type.category === 'groceries');
    console.log(firstGroceryItem);

    // Index of the first "Samsung" smartphone
    let indexOfFirstSamsungSmartphone = result.findIndex(product => (product.brand === 'Samsung') && (product.category === 'smartphones'));
    console.log(indexOfFirstSamsungSmartphone);

    // Check if there is any item from the brand "Sony"
    let itemsFromSony = result.find(product => product.brand === 'Sony');
    if (typeof itemsFromSony === 'undefined') {
        console.log("There are no items from the brand Sony.");
    }
    else {
        console.log(`There are ${itemsFromSony} items from the brand Sony.`);
    }

    // The name of the highest rated skincare product

    // I
    let highestRatedSkincareProduct1 = result.filter(product => product.category === 'skincare').sort((a,b) => b.rating - a.rating)[0].title;
    console.log(highestRatedSkincareProduct1);

    // II
    let skincareProducts = result.filter(product => product.category === 'skincare');
    let highestRating = skincareProducts.reduce((acc, curr) => {
        if (acc < curr.rating) {
            return curr.rating;
        }
        return acc;
    }, skincareProducts[0].rating);
    let highestRatedSkincareProduct2 = skincareProducts.find(product => product.rating === highestRating).title;
    console.log(highestRatedSkincareProduct2);

    // The average discount percentage of products with a rating above 4.5
    let productsWithRatingAbove4dot5 = result.filter(product => product.rating > 4.5);
    let averageDiscountPercentage = Math.round(productsWithRatingAbove4dot5.reduce((acc,curr) => acc + curr.discountPercentage, 0) / productsWithRatingAbove4dot5.length * 100) / 100;
    console.log(productsWithRatingAbove4dot5);
    console.log(averageDiscountPercentage);

    // Find the product with the highest price

    // I
    let productWithHighestPrice1 = copiedProducts.sort((a,b) => b.price - a.price)[0];
    console.log(productWithHighestPrice1);

    // II
    let highestPrice = result.reduce((acc, curr) => Math.max(acc, curr.price), result[0].price);
    let productWithHighestPrice2 = result.find(product => product.price === highestPrice);
    console.log(productWithHighestPrice2);

    // Average price of all IPhone smartphones

    // I
    let iPhoneSmartphones = result.filter(product => (product.brand === 'Apple') && (product.category === 'smartphones'));

    // II
    // let iPhoneSmartphones = result.filter(product => product.title.toLowerCase().includes('iphone'));

    let averagePrice = iPhoneSmartphones.reduce((acc, curr) => acc + curr.price, 0) / iPhoneSmartphones.length;
    console.log(iPhoneSmartphones);
    console.log(averagePrice);

    // The product with the lowest price

    // I
    let productWithLowestPrice = copiedProducts.sort((a,b) => a.price - b.price)[0];
    console.log(productWithLowestPrice);

    // II
    let lowestPrice1 = result.reduce((acc, curr) => {
        if(acc > curr.price) {
            return curr.price;
        }
        return acc;
    }, result[0].price);
    let productWithLowestPrice1 = result.find(product => product.price === lowestPrice1);
    console.log(productWithLowestPrice1);

    // III
    let lowestPrice2 = result.reduce((acc, curr) => Math.min(acc, curr.price), result[0].price);
    let productWithLowestPrice2 = result.find(product => product.price === lowestPrice2);
    console.log(productWithLowestPrice2);
})
.catch(error => console.log(error));



/* Exercise 3
   There is a JSON with recipes. Make a call and get the following data from it: (requirements written below, in the solution)

   Link: https://dummyjson.com/recipes
*/

fetch("https://dummyjson.com/recipes")
.then(response => {
    if(!response.ok) {
        throw new Error("There's something wrong with the network or the server.");
    }
    return response.json();
})
.then(response => {
    console.log(response);

    let result = response.recipes;
    console.log(result);

    // All Desserts 🤤
    let allDesserts = result.filter(meal => meal.mealType.includes('Dessert'));
    console.log(allDesserts);

    // Get the names of recipes with more than 30 reviews
    let recipeNamesWithAtLeast30Reviews = result.filter(meal => meal.reviewCount > 30).map(meal => meal.name);
    console.log(recipeNamesWithAtLeast30Reviews);

    // All recipes that use Cinnamon as an ingredient
    let recipesWithCinnamon = result.filter(meal => meal.ingredients.map(ingredient => ingredient.toLowerCase()).includes('cinnamon'));
    console.log(recipesWithCinnamon);

    // Recipes that are served as both Lunch and Dinner
    let recipesForLunchAndDinner = result.filter(meal => meal.mealType.includes('Lunch') && meal.mealType.includes('Dinner'));
    console.log(recipesForLunchAndDinner);

    // The ingredients needed for "Mango Salsa Chicken" dish

    // I
    let ingredientsForMangoSalsaChicken1 = result.find(recipe => recipe.name === 'Mango Salsa Chicken').ingredients;
    console.log(ingredientsForMangoSalsaChicken1);

    // II 
    let ingredientsForMangoSalsaChicken2 = result.find(recipe => recipe.name === 'Mango Salsa Chicken').ingredients.forEach(ingredient => console.log(ingredient));

    // Calculate the average number of calories for all American cusine recipes
    let americanCuisineAverageCalories = result.filter(meal => meal.cuisine.toLowerCase() === 'american')[0].caloriesPerServing; // because there is only one American dish
    console.log(americanCuisineAverageCalories);

    // If there were more American dishes:
    let americanCuisineRecipes = result.filter(meal => meal.cuisine.toLowerCase() === 'american');
    let averageCalories = americanCuisineRecipes.reduce((acc, curr) => acc + curr.caloriesPerServing, 0) / americanCuisineRecipes.length;
    console.log(americanCuisineRecipes);
    console.log(averageCalories);

    // The average cooking time of all pasta recipes

    // I
    let pastaRecipes = result.filter(meal => meal.name.toLowerCase().includes('pasta'));

    // II
    // let pastaRecipes = result.filter(meal => meal.tags.map(tag => tag.toLowerCase()).includes('pasta'));

    let averageCookingTime = pastaRecipes.reduce((acc, curr) => acc + curr.cookTimeMinutes, 0) / pastaRecipes.length;
    console.log(pastaRecipes);
    console.log(averageCookingTime);

    // Find the recipe with the lowest number of reviews

    // I
    let copiedRecipes = result.slice();
    let recipeLowestNumOfReviews = copiedRecipes.sort((a,b) => a.reviewCount - b.reviewCount)[0];
    console.log(recipeLowestNumOfReviews);

    // II
    let lowestNumberOfReviews1 = result.reduce((acc, curr) => {
        if(acc > curr.reviewCount) {
            return curr.reviewCount;
        }
        return acc;
    }, result[0].reviewCount);
    let recipeLowestNumOfReviews1 = result.find(meal => meal.reviewCount === lowestNumberOfReviews1);
    console.log(recipeLowestNumOfReviews1);

    // III 
    let lowestNumberOfReviews2 = result.reduce((acc, curr) => Math.min(acc, curr.reviewCount), result[0].reviewCount);
    let recipeLowestNumOfReviews2 = result.find(meal => meal.reviewCount === lowestNumberOfReviews2);
    console.log(recipeLowestNumOfReviews2);
})
.catch(error => console.log(error));