//get reference to textbox
var textNameElem = document.querySelector(".textName")
//get reference to all radio buttons
var checkedRadioBtn = document.querySelector('.selectTypeRadio1')
//var textNameElem = document.querySelector('.textName')

//get reference to greet button
var greetMeBtnElem = document.querySelector('.greetMeBtn')
//get reference to reset button
var resetBtnElem = document.querySelector('.resetBtn')

//get reference to counter number
var counterElem = document.querySelector('.counter')
//get reference to message desplay
var displayedNameElem = document.querySelector('.displayedName')


//add an event listener for when the 'greetMessage' button is pressed

var names = []

if (localStorage['name']) {
    var names = JSON.parse(localStorage.getItem('name'))
}
//console.log(names.length)
//counterElem.innerHTML = names.length

var greetInsta = tools(names)
counterElem.innerHTML = greetInsta.counter();

resetBtnElem.addEventListener('click', function () {
    localStorage.clear()
    location.reload();
}
);

function thebuttons1() {
    var checkedRadio = document.querySelector("input[name='selectTypeRadio']:checked");
    const regex = /[a-zA-Z]$/g;

    if (!checkedRadio && textNameElem.value === "") {
        displayedNameElem.classList.add("red");
        return displayedNameElem.innerHTML = 'Enter your name and select a language!';
    } else if (!checkedRadio) {
        displayedNameElem.classList.add("red");
        return displayedNameElem.innerHTML = 'Select a language!';
    } if (textNameElem.value === "") {
        displayedNameElem.classList.add("red");
        return displayedNameElem.innerHTML = 'Enter your name!';
    }
    if (!regex.test(textNameElem.value)) {
        displayedNameElem.classList.add("red");
        return displayedNameElem.innerHTML = 'Only enter letters eg.John';
    }


    else {
        greetInsta.storeNames(textNameElem.value)
        displayedNameElem.classList.remove("red");

        displayedNameElem.innerHTML = greetInsta.greet(checkedRadio.value, textNameElem.value);
        // counterElem.innerHTML = greetInsta.counter()
        counterElem.innerHTML = greetInsta.counter();

        //set names  into localstorage.
        let key = greetInsta.getNames();
        // let value = greetInsta.counter();
        localStorage.setItem('name', JSON.stringify(key));

    }
    textNameElem.value = ""
    checkedRadio = document.getElementById("clearOut1").checked = true;
    checkedRadio = document.getElementById("clearOut2").checked = true;
    checkedRadio = document.getElementById("clearOut3").checked = true;

}
greetMeBtnElem.addEventListener('click', thebuttons1);