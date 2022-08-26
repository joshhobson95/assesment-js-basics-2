///////////////////////////////////////////////
///////////////////HOME.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    helps with some functionality on the home 
    page of the restaurant's website.
*/


//////////////////PROBLEM 1////////////////////
/* 
    Write an *arrow* function called `greetUser`
    It should have one parameter, `username`
    The function should return a string that says: 
    'Welcome back, [USERNAME]'
    Where USERNAME is the `username` arguement sent in

    For example, if called with `Andrew` as the 
    argument, `greetUser` should return the string:
    'Welcome back, Andrew'
*/

//CODE HERE

const greetUser = (username) => {
    console.log(`Welcome back, ${username}`)
}
greetUser('Andrew')



//with one parameter you technically dont need the parathesis line 26



//////////////////PROBLEM 2////////////////////
/* 
    Below is an array of zip codes that are in
    the restaurant's delivery zone. 

    Write a function called `canWeDeliver` that
    takes in one argument, `zipCode`.

    If the zip code passed in is in the array,
    return a string letting the user know they
    are eligible for delivery. If they are not, 
    return a string letting them know that. 

    For example:
    canWeDeliver(84606) 
        // `Sorry, we can't deliver to that address`
    canWeDeliver(85205) 
        // `You're in our delivery zone!`
*/

const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]

//CODE HERE

const canWeDeliver = (zipcode) => {
    for(let i = 0; i < deliveryAreaZipCodes.length; i++){
        if(zipcode === deliveryAreaZipCodes[i]){
        return "You're in our delivery zone!"  }  
        else  { (zipcode !== deliveryAreaZipCodes[i])
        return  `Sorry, we can't deliver to that address`}
    }
  
}

console.log(canWeDeliver(45645))



const canWeDeliver1 = (zipCode) => {
    for(let i = 0; i < deliveryAreaZipCodes.length; i++){
        if(deliveryAreaZipCodes[i] === zipCode){
            return "You're in our delivery zone!"
        }
    } 
        return "Sorry, we cant deliver to this address!"
}

//return outside the for loop

//so so close
//return will break the loop and it will not check the rest of the numbers in the array. having the return outside the for loop was all i needed.
//return is always the last line of code that will ever run

console.log(canWeDeliver1(85206))


    



/* 
    Problem 2 Continued

    Now you're going to rewrite your function.

    If you wrote `canWeDeliver` using a loop of
    some kind, write a new function (`canWeDeliverTwo`)
    below, using the `includes` array method. 
    Look it up on MDN if you're not sure how to use 
    it. 

    If you already used the `includes` method, 
    write a new function using some sort of 
    loop (for loop, higher order array method).
    Name your new function `canWeDeliverTwo`.
*/

// CODE HERE

function canWeDeliverTwo (zipcode){
    if (deliveryAreaZipCodes.includes(zipcode)){
        return "You're in our delivery zone!"
    }
else { return `Sorry, we can't deliver to that address`}

}

console.log(canWeDeliverTwo(85205))


//////////////////PROBLEM 3////////////////////
/* 
    Below is an array of objects that have some
    information about a couple of deals that are
    available at the restaurant currently. 

    You are going to access the object's properties 
    and change some values. Don't edit the array 
    directly, let's use the `replace` method.

    Read on for more instructions.
*/

const deals = [
    {
        title: '15% Off!', 
        desc: 'Applied to your entire order when you spend $30 or more'
    }, 
    {
        title: 'Free Kids Meal with 2 Regular Entrees', 
        desc: '   This deal lasts until the end of March! '
    }
]

/*
    The owner has decided to take the 15% off
    deal down to 10%.

    Reassign the value of the first deal's title
    to be itself, but use the `replace` method
    to replace the 15 with a 10.
*/

//CODE HERE


console.log(deals[0].title)

//so the array posotion goes first deal[0] and you can use dot notation to get just the title piece of deals[0] // consoleloggin 15% off

    //deals[0].title = 'this is my replacement title'
//now we can reassign  deals[0].title value to something else
    //console.log(deals[0].title)
//now the console log is the exactly same but the value of deal[0].title has now been updated to a new value and // now console logs 'this is my replacement value' 

deals[0].title = deals[0].title.replace('15%', '10%')

//now you can do the exact same thing as above but adding .replace command to find where deals[0].title has the value of '15%' and replace it with '10%'

console.log(deals[0].title)

/*
    The restaurant is going to continue its
    family deal for another month. 

    Reassign the value of the second deal's desc
    to be itself, but use the `replace` method
    to replace the word March with April.

    You should also make sure that there is no
    whitespace in this string, since it seems
    to be displaying wrong on the live site.
*/

//CODE HERE



console.log(deals[1].desc)

deals[1].desc = deals[1].desc.replace('March', 'April')

console.log(deals[1].desc)
//same as above just acessing desc and the [1] of the array



deals[1].desc = deals[1].desc.trim().replace('March', 'April')

//then we have to use .trim() to take out any whitespace

console.log(deals[1].desc)