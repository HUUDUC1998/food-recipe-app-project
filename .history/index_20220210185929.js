const searchBtn = document.getElementById("search-btn")
const mealList = document.getElementById("meal")
const mealDetailsContent = document.querySelector(".meal-details-content")
const recipeCloseBtn = document.getElementById("recipe-close-btn")

// event
searchBtn.addEventListener("click", getMealList)

// get meal list that matches with the ingredients

function getMealList() {
    let searchInputTxt = document.getElementById("search-input").value.trim( )
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(res => res.json())
    .then(data =>{
        let html =""
        if(data.meals){
            data.meals.array.forEach(element => {
                
            });
        }
    })
}