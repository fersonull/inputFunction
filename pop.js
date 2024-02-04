let popUp = document.getElementById('openPop');
let wrappClose = document.getElementById('wrapbox');

function userDone() {
    let userIn = document.getElementById('user-input').value;

    popUp.classList.add("popup-open");
    wrappClose.classList.add("wrapper-close");
    document.getElementById("user").innerHTML = "Welcome, " + userIn + "!";
}

function closePop() {
    popUp.classList.remove("popup-open");
}