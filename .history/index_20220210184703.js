const searchBtn = document.getElementById("search-btn")
const mealList = document.getElementById("meal")
const mealDetailsContent = document.querySelector(".meal-details-content")
const recipeCloseBtn = document.getElementById("recipe-close-btn")

// event
searchBtn.addEventListener("click", getMealList)

// get meal list that matches with the ingredients

function getMealList() {
    let searchInputTxt = document.getElementById("search-input").ariaValueMax.trim()
    console.log(searchInputTxt);
}