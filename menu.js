///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

let pizza = {
    name: "pizza1",
    price: 14.99,
    category: "entree",
    popularity: 1,
    rating: 5,
    tags: ["meat", "popular", "discounted"]
}






//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE

console.log(pizza.popularity)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE



console.log(pizza.tags[0])
console.log(pizza.tags[1])


console.log(pizza['tags'])
//no brakcet notation



/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE

let {price} = pizza
let newprice = pizza.price = 12.99

console.log(newprice)

//only needed 
let {price1} = pizza


/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE

let {category} = pizza

console.log(category)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

let foodArr = [
  {"name": "pasta", "price":10.99, "popularity": 3, "rating": 5, "tags":["gluten", "entree"]},
  {"name": "pizza", "price":9.99, "popularity": 2, "rating": 4, "tags":["meat", "entree"]},
  {"name": "salad", "price":5.99, "popularity": 1, "rating": 3, "tags":["vegeterian", "side"]},
  {"name": "soda", "price":2.99, "popularity": 4, "rating": 2, "tags":["drink", "sugar"]},
  {"name": "calzone", "price":8.99, "popularity": 5, "rating": 1, "tags":["best", "entree"]}


]
// started with the array below but updated it to be like one above to try and match the PokemonGo examples on the Lab
const foodArr1 = [
    {
        name: 'pizza', 
        price: 9.99, 
        category: 'entree', 
        popularity: 1, 
        rating: 4.7, 
        tags: ['customer favorite', 'kids', 'gluten-free option']
    }, 
    {
        name: 'pasta', 
        price: 8.99, 
        category: 'entree', 
        popularity: 3, 
        rating: 4.8, 
        tags: ['customer favorite']
    }, 
    {
        name: 'salad', 
        price: 7.99, 
        category: 'side', 
        popularity: 4, 
        rating: 4.4, 
        tags: ['gluten-free option']
    }, 
    {
        name: 'cookie', 
        price: 2.99, 
        category: 'dessert', 
        popularity: 2, 
        rating: 5.0, 
        tags: ['customer favorite', 'kids']
    }, 
    {
        name: 'breadsticks', 
        price: 6.99, 
        category: 'side', 
        popularity: 5, 
        rating: 4.6, 
        tags: ['customer favorite', 'kids']
    }
]


  
  

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

//what i did first, but recall it working
 const filteredFood = foodArr.filter(name => name.tags.includes("drink"))
console.log(filteredFood)
//yup this still works was the one line example

 const filteredFood1 = foodArr1.filter((name) => {
    if(name.tags.includes('kids')){
        return name
    }
 })
 console.log(filteredFood)
 //basically does that same thing but has an if statment
//my method worked fine though



//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE

const filterByProperty = (property, number, type) => {
    const filteredFood1 = foodArr1.filter((food) => {
        if(type === 'above'){
            return food[property] >= number
        }else{
            return food[property] <= number
        }
    })
    return filteredFood
}



//you also need two parathesis after foodArr1.filter because it takes in a parameter and need to contain the if statement that if part of looping things over as a .filter does

//this is set up so you can pass in price above 5
//and also use it and pass in popularity below 7

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE


console.log(filterByProperty('popularity', 3, 'below'))

//here we can actually pass in value to use the function above 


//populatiry chooses the thing to search the number for
// we want things that are below 3
//defined above and below was defined in the instructions. 

//still getting undefined though...????