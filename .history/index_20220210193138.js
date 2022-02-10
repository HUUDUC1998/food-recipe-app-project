const searchBtn = document.getElementById("search-btn")
const mealList = document.getElementById("meal")
const mealDetailsContent = document.querySelector(".meal-details-content")
const recipeCloseBtn = document.getElementById("recipe-close-btn")

// event
searchBtn.addEventListener("click", getMealList)
mealList.addEventListener("click",getRecipe)
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
                            <img src="${meal.strMealThumb}" alt="food">
                        </div>
                        <div class="meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href="#" class="recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `
                mealList.classList.remove("notFound")
            });
        } else {
            html = "Sorry, we didn't find any meal !"
            mealList.classList.add("notFound")
        }
        mealList.innerHTML = html
    });
}

function getRecipe(e) {
    e.preventDefault();
    if (e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(rs => rs.json())
        .then(data => {
            mealRecipeModal(data.meals)
        })
    }
}
function mealRecipeModal(meal) {
    meal=meal[0]
    let html = `
    
    `
}