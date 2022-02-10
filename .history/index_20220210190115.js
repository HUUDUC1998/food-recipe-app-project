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
            data.meals.forEach(meal=>{
                html += `
                <div class="meal-item" data-id="${meal.idMeal}">
                        <div class="meal-img">
                            <img src="https://raw.githubusercontent.com/prabinmagar/meal-search-api-vanilla-js/master/food.jpg" alt="food">
                        </div>
                        <div class="meal-name">
                            <h3>Potato Chips</h3>
                            <a href="#" class="recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `
            })
        }
    })
}