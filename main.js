const button = document.querySelector(".button")
//button.addEventListener("click", function() {})

let url = "https://crossorigin.me/http://www.recipepuppy.com/api/?q="

button.addEventListener("click", event => {
  event.preventDefault()

  let searchBox = document.getElementById("searchBox")
  console.log(searchBox.value)

  const recipepuppy = document.querySelector(".RecipeBox")

  const promise = fetch(url + searchBox.value).then(response => response.json()).then(recipe => {
    console.log(recipe)

    for (var i = 0; i < recipe.results.length; i++) {
      let recipeContainer = document.createElement("div")
      recipeContainer.className += "RecipeContainer"
      let title = document.createElement("p")
      let image = document.createElement("img")
      //  let ingredients = document.createElement("p")

      title.textContent = recipe.results[i].title
      image.src = recipe.results[i].thumbnail
      //  ingredients.textContent = recipe.results[i].ingredients

      recipeContainer.appendChild(title)
      recipeContainer.appendChild(image)
      //  recipeContainer.appendChild(ingredients)

      recipepuppy.appendChild(recipeContainer)
    }
  })
})

// // 1. First, find our UL Container
// const characters = document.querySelector(".characters")
// // 2. Create our Ajax Request
//
// const promise = fetch("http://swapi.co/api/people/")
// .then(response => response.json())
// .then(people => {
//   console.log(people)
//
//   people.results.forEach(function(person, index) {
//     const charactersInd = document.createElement("li")
//     charactersInd.textContent = person.name
//     characters.appendChild(charactersInd)
//   })
// })
//
//
//
// "title": "Baked Omelet With Broccoli &amp; Tomato",
//   "href":"http://www.recipezaar.com/Baked-Omelet-With-Broccoli-Tomato-325014",
//   "ingredients": "milk, cottage cheese, broccoli, cheddar cheese, basil, onion powder, eggs, garlic powder, roma tomato, salt",
//   "thumbnail": "http://img.recipepuppy.com/123889.jpg"
//
//
// const data = customers.results
// let mediumBox = document.querySelector(".mediumBox")
//
// for (var i = 0; i < customers.results.length; i++) {
//   let personBox = document.createElement("div")
//
//   let image = document.createElement("img")
//   let firstAndLastname = document.createElement("p")
//   let email = document.createElement("p")
//   let address = document.createElement("address")
//   let phone = document.createElement("phone")
//
//   image.src = customers.results[i].picture.large
//   firstAndLastname.textContent = customers.results[i].name.first + " " + customers.results[i].name.last
//   email.textContent = customers.results[i].email
//   address.textContent = customers.results[i].location
//   phone.textContent = customers.results[i].phone
//
//   personBox.appendChild(image)
//   personBox.appendChild(firstAndLastname)
//   personBox.appendChild(email)
//   personBox.appendChild(address)
//   personBox.appendChild(phone)
//
//   mediumBox.appendChild(personBox)
// }
