var radioBttnsElement = document.querySelector(".radioBttns");
var textBoxElement = document.querySelector(".textBoxBttn");
var greetBttnElement = document.querySelector(".greetBttn");
var counterElement = document.querySelector(".cnt");
var resetElement = document.querySelector(".rst");
var displaynameElement = document.querySelector(".nameDisplayed")

// a global variable that will keep track of records

var names = [];

if(localStorage['name']){
    var names = JSON.parse(localStorage.getItem('name'))
}

var greetInsta = Greetings(names)
counterElement.innerHTML = greetInsta.counter();

resetElement.addEventListener('click', function(){
    localStorage.clear();
    location.reload();
});

function buttons(){
    var radioBttnChecked = document.querySelector("input[name='radioBttns']:checked");
    const regex = /[a-zA-Z]$/g;

    if(!radioBttnChecked && textBoxElement.value == ""){
        displaynameElement.classList.add("red");
        return displaynameElement.innerHTML = 'Enter name and select language';

    }else if (!radioBttnChecked){
        displaynameElement.classList.add("red");
        return displaynameElement.innerHTML = 'Select a language';
    
    }if(textBoxElement.value === ""){
        displaynameElement.classList.add("red");
        return displaynameElement.innerHTML = 'Enter your name!';

    }if(!regex.test(textBoxElement.value)){
        displaynameElement.classList.add("red");
        return displaynameElement.innerHTML = "Only letters from A-Z!";

    }

    else {
        greetInsta.storingNames(textBoxElement.value)
        displaynameElement.classList.remove("red")

        displaynameElement.innerHTML = greetInsta.greet(radioBttnChecked.value, textBoxElement.value);
        counterElement.innerHTML = greetInsta.counter();

        // set names into local storage.
        let key = greetInsta.getTheNames();
        localStorage.setItem('name', JSON.stringify(key));
    }
    textBoxElement.value =""
    radioBttnChecked = document.getElementById("id1").checked = false
    radioBttnChecked = document.getElementById("id2").checked = false
    radioBttnChecked = document.getElementById("id3").checked = false
}
greetBttnElement.addEventListener('click', buttons);


