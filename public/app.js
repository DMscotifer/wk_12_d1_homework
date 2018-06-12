var app = function() {

// createCatPost("Neo", "Smith's", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nawt.org.uk%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fflexslider_full_tall%2Fpublic%2Fcats%2F20170201_095922_0.jpg%3Fitok%3DfiXlY8cZ&f=1");

createPost("Neo");
}

  // CAT has: name, favourite food, image
function createCatPost(name, favfood, imageLink) {
  function inputName(name) {
    var liName = document.createElement('li');
    liName.textContent = "Name: " + name;
    return liName;
  }


function inputFavouriteFood(favfood) {
  var liFavouriteFood = document.createElement('li');
  liFavouriteFood.textContent = "Favourite food: " + favfood;
  return liFavouriteFood;
}


function createImg(imageLink) {}

function createFullElement(cat, name, favefood, img) {
    const catSection = document.querySelector('#cats');
    cat.appendChild(name);
    catSection.appendChild(cat);
}


const newCatPic = function(name, favfood, img) {

const fullElement = createFullElement(cat, textDataName, textDataFavFood, imgData);

}

}


window.onload = app;
