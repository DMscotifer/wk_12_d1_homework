// SEED IT!!!
var app = function() {
  addCat("Rosa", "Whiskas", "https://artbygabi.files.wordpress.com/2014/05/p1020637.jpg");
  addCat("Damien", "Human souls", "https://i.imgur.com/RIMjpT5.jpg?1")
}


// CALL IT
var addCat = function(name, favFood, url) {
  var image = createImage(url);
  var catName = createName(name);
  var catFood = createFood(favFood);

  appendAllElements(catName, catFood, image);
}


// CREATE IT
var createImage = function(url){
// GIVE IT A TAG
  var imageLi = document.createElement("li");
  // imageLi.innerHtml = "<img width=500 src = \'" + url + "\' >";
  var imagetag = document.createElement("img");
  imagetag.width = "500";
  imagetag.src = url;
// APPEND IT NOW!
  imageLi.appendChild(imagetag);
  return imageLi;
}

// SAME BUT DIFFERENT
var createName = function(name) {
  var nameLi = document.createElement("li");
  nameLi.textContent = name;
  return nameLi;
}

// SAME BUT DIFFERENT
var createFood = function(food){
  var foodLi = document.createElement("li");
  foodLi.textContent = "Favourite food: " + food;
  return foodLi;
}

// APPEND EVERYTHING TO ONE ALL ENCOMPASSING VARIABLE MADE UP OF ALL THE DIFFERENT PARTS
var appendAllElements = function(nameLi, foodLi, imageLi){
  var catList = document.createElement("ul");
  catList.classList.add("cat");
  // APPEND IN THE RIGHT ORDER
  catList.appendChild(nameLi);
  catList.appendChild(foodLi);
  catList.appendChild(imageLi);


  var container = document.querySelector("#cats");
  container.appendChild(catList);
}

// HASTA LA VISTA, BABY
window.onload = app;
