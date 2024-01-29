

// $('#opNav').click(function () {                    <---|  
//     $('.navMain').animate({left : 50} , 500);      <---|  
//     $('.leftNav').animate({left : 50} , 500);      <---|
//     $('#clNav').removeClass('d-none');             <---|  
//     $('#opNav').addClass('d-none');                <---|
// })                                                 <---|--------- its for the animation for the nav 
// $('#clNav').click(function () {                    <---|
//     $('.leftNav').animate({left : 0} , 500);       <---|
//     $('#opNav').removeClass('d-none');             <---|
//     $('#clNav').addClass('d-none');                <---|
// })

let dataFromApi = document.getElementById('dataFromApi');
let boxOfSearch = document.getElementById('boxOfSearch');
let btnForSubmit;


function displayDishesApi(arr) {
    let cartoooona = ''
    for (let i = 0; i < arr.length; i++) {
        cartoooona +=`
                    <div class=" col-md-3">
                        <div class=" dishApi overflow-hidden position-relative rounded-3 text-center">
                            <img src="${arr[i].strMealThumb}" alt="" class="w-100"></img>
                            <div class=" dishesLayer position-absolute text-center pt-4">
                                <h2 class=" pt-5">${arr[i].strMeal}</h2>
                            </div>
                        </div>
                    </div>
                    `
    }
    dataFromApi.innerHTML =cartoooona;
}
// $('.dishApi').click(function () {                 <---|
    // getDishDetailsApi('${arr[i].idMeal}')         <---|--------- i've tried this method to avoid writing js in html but it didn't work. 
// })                                                <---|



async function getAreaApi() {
    dataFromApi.innerHTML = '';
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    response = await response.json()
    displayAreaApi(response.meals)
}

function displayAreaApi(arr) {
    let cartoooona = '';
    for (let i = 0; i < arr.length; i++) {
        cartoooona +=`
                    <div class=" col-md-3">
                        <div onclick="getAreaDishes('${arr[i].strArea}')" class=" areaApi rounded-3 text-center">
                            <i class="fa-solid fa-earth-americas fa-5x"></i>
                            <h2>${arr[i].strArea}</h2>
                        </div>
                    </div>
                    `
    }
    dataFromApi.innerHTML = cartoooona;
}
// $('.areaApi').click(function () {              <---|
//     getAreaDishes('${arr[i].strArea}');        <---|--------- i've tried this method to avoid writing js in html but it didn't work. 
// })                                             <---|
$('#area').click(function () {
    getAreaApi();
})



async function getCategApi() {
    dataFromApi.innerHTML = '';
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    response = await response.json()
    displayCategApi(response.categories)
}

function displayCategApi(arr) {
    let cartoooona = '';
    for (let i = 0; i < arr.length; i++) {
        cartoooona +=`
                    <div class=" col-md-3">
                        <div onclick="getCategDishes('${arr[i].strCategory}')" class=" categApi rounded-3 text-center position-relative overflow-hidden">
                            <img src="${arr[i].strCategoryThumb}" alt="" class="w-100"></img>
                            <div class=" categoryLayer position-absolute text-center pt-4">
                                <h2>${arr[i].strCategory}</h2>
                                <p>${arr[i].strCategoryDescription.split(" ").slice(0,15).join(" ")}</p>
                            </div>
                        </div>
                    </div>
                    `
    }
    dataFromApi.innerHTML = cartoooona;
}
// $('.categApi').click(function () {                 <---|
//     getCategDishes('${arr[i].strCategory}')        <---|--------- i've tried this method to avoid writing js in html but it didn't work. 
// })                                                 <---|
$('#categories').click(function () {
    getCategApi();
})






async function getIngredApi() {
    dataFromApi.innerHTML = '';
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    response = await response.json();
    displayIngredApi(response.meals.slice(0 , 15));
}

function displayIngredApi(arr) {
    let cartoooona = '';
    for (let i = 0; i < arr.length; i++) {
        cartoooona +=`
                    <div class=" col-md-3">
                        <div onclick="getIngredDishes('${arr[i].strIngredient}')" class=" ingredApi rounded-3 text-center position-relative overflow-hidden">
                            <i class="fa-solid fa-utensils fa-5x"></i>
                            <h2>${arr[i].strIngredient}</h2>
                            <p>${arr[i].strDescription.split(" ").slice(0,15).join(" ")}</p>
                        </div>
                    </div>
                    `
    }
    dataFromApi.innerHTML = cartoooona;
}
// $('.ingredApi').click(function () {                  <---|
//     getIngredDishes('${arr[i].strIngredient}')       <---|--------- i've tried this method to avoid writing js in html but it didn't work. 
// })                                                   <---|
$('#ingredients').click(function () {
    getIngredApi();
})






// function getDishDetailsApi(idOfMeal){
//     dataFromApi.innerHTML = ``;
//     boxOfSearch.innerHTML = ``;
//     let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idOfMeal}`);
//     respone = await respone.json();
//     displayMealDetails(respone.meals[0])
// }

// function displayDishDetailsApi(dish) {
// 
// 
// }


async function getCategDishes(category) {
    dataFromApi.innerHTML = "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    response = await response.json();
    displayDishesApi(response.meals.slice(0 , 15))
}
async function getAreaDishes(area) {
    dataFromApi.innerHTML = "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    response = await response.json();
    displayDishesApi(response.meals.slice(0 , 15))
}
async function getIngredDishes(ingredients) {
    dataFromApi.innerHTML = "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
    response = await response.json();
    displayDishesApi(response.meals.slice(0 , 15))
}

function displayInputsofSearch() {
    boxOfSearch.innerHTML = `
                            <div class="row py-4 ">
                                <div class="col-md-6 ">
                                    <input onkeyup="nameSearch(this.value)" class=" form-control bg-transparent" type="text" placeholder="enter the name">
                                </div>
                                <div class="col-md-6">
                                    <input onkeyup="firstLetterSearch(this.value)" maxlength="1" class="form-control bg-transparent" type="text" placeholder="enter the first letter">
                                </div>
                            </div>`;
    
    dataFromApi.innerHTML = ``;
}

async function nameSearch(input) {
    dataFromApi.innerHTML = ""
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
    response = await response.json()
    const mealsToDisplay = response.meals || [];
    displayDishesApi(mealsToDisplay);
}

async function firstLetterSearch(input) {
    dataFromApi.innerHTML = ""
    if (input === "") {
        input = "a";
    }
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`)
    response = await response.json()
    const mealsToDisplay = response.meals || [];
    displayDishesApi(mealsToDisplay);
}

$('#search').click(function () {
    displayInputsofSearch();
})


let thisInputForName = false;
let thisInputForEmail = false;
let thisInputForPhone = false;
let thisInputForAge = false;
let thisInputForPassword = false;
let thisInputForRePassword = false;

function displayContactBox() {
    dataFromApi.innerHTML = `<div class="contactBox min-vh-100 d-flex justify-content-center align-items-center">
                                <div class="container w-75 text-center">
                                    <div class="row g-4">
                                        <div class="col-md-6">
                                            <input id="nameInput" onkeyup="Validation()" type="text" class="form-control" placeholder="Enter Your Name">
                                            <div id="notifName" class=" alert-danger w-100 mt-3 d-none">
                                                you cannot enter numbers or special characters
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <input id="emailInput" onkeyup="Validation()" type="email" class="form-control " placeholder="Enter Your Email">
                                            <div id="notifEmail" class=" alert-danger w-100 mt-3 d-none">
                                                incorrect email (" abcde@abc.com ")
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <input id="phoneInput" onkeyup="Validation()" type="text" class="form-control " placeholder="Enter Your Phone">
                                            <div id="notifPhone" class=" alert-danger w-100 mt-3 d-none">
                                                you should enter a correct phone number
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <input id="ageInput" onkeyup="Validation()" type="number" class="form-control " placeholder="Enter Your Age">
                                            <div id="notifAge" class=" alert-danger w-100 mt-3 d-none">
                                                you should enter a correct age
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <input  id="passwordInput" onkeyup="Validation()" type="password" class="form-control " placeholder="Enter Your Password">
                                            <div id="notifPassword" class=" alert-danger w-100 mt-3 d-none">
                                                you should enter a correct password (" you should enter at least eight characters including uppercase letter and a number ")
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <input  id="repasswordInput" onkeyup="Validation()" type="password" class="form-control " placeholder="Re Enter Your Password">
                                            <div id="notifRePassword" class=" alert-danger w-100 mt-3 d-none">
                                                you should enter the same password as before 
                                            </div>
                                        </div>
                                    </div>
                                    <button id="btnForSubmit" disabled class="btn btn-outline-danger px-2 mt-4">Submit</button>
                                </div>
                            </div> `;

            btnForSubmit = document.getElementById('btnForSubmit')

            document.getElementById("nameInput").addEventListener("focus", function (){
                thisInputForName= true
            })
        
            document.getElementById("emailInput").addEventListener("focus", function (){
                thisInputForEmail = true
            })
        
            document.getElementById("phoneInput").addEventListener("focus", function (){
                thisInputForPhone = true
            })
        
            document.getElementById("ageInput").addEventListener("focus", function (){
                thisInputForAge = true
            })
        
            document.getElementById("passwordInput").addEventListener("focus", function (){
                thisInputForPassword = true
            })
        
            document.getElementById("repasswordInput").addEventListener("focus", function (){
                thisInputForRePassword = true
            })
}
$('#contactUs').click(function () {
    displayContactBox();
})

function validateName() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}
function validateEmail() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}
function validatePhone() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}
function validateAge() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}
function validatePassword() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}
function validateRePassword() {
    return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}

function validation() {
    if (thisInputForName) {
        if (validateName()) {
            document.getElementById("notifName").classList.replace("d-block", "d-none")
        } 
        else {
            document.getElementById("notifName").classList.replace("d-none", "d-block")
        }
    }
    if (thisInputForEmail) {
        if (validateEmail()) {
            document.getElementById("notifEmail").classList.replace("d-block", "d-none")
        } 
        else {
            document.getElementById("notifEmail").classList.replace("d-none", "d-block")
        }
    }
    if (thisInputForPhone) {
        if (validatePhone()) {
            document.getElementById("notifPhone").classList.replace("d-block", "d-none")
        } 
        else {
            document.getElementById("notifPhone").classList.replace("d-none", "d-block")
        }
    }
    if (thisInputForAge) {
        if (validateAge()) {
            document.getElementById("notifAge").classList.replace("d-block", "d-none")
        } 
        else {
            document.getElementById("notifAge").classList.replace("d-none", "d-block")
        }
    }
    if (thisInputForPassword) {
        if (validatePassword()) {
            document.getElementById("notifPassword").classList.replace("d-block", "d-none")
        } 
        else {
            document.getElementById("notifPassword").classList.replace("d-none", "d-block")
        }
    }
    if (thisInputForRePassword) {
        if (validateRePassword()) {
            document.getElementById("notifRePassword").classList.replace("d-block", "d-none")
        } 
        else {
            document.getElementById("notifRePassword").classList.replace("d-none", "d-block")
        }
    }
    if (validateName() &&validateEmail() &&validateAge() &&validatePhone() &&validatePassword() &&validateRePassword()){
        btnForSubmit.removeAttribute("disabled")
    } 
    else {
        btnForSubmit.setAttribute("disabled", true)
    }
}
