var link = document.querySelector(".button-search");
var popup = document.querySelector(".modal-search");
var login = popup.querySelector(".date-input");
var form = popup.querySelector(".date-form");

var arrival = popup.querySelector(".arrival");
var departure = popup.querySelector(".departure");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-search-show");
    login.focus();
});

form.addEventListener("submit", function (evt) {
    if(!arrival.value || !departure.value){
        evt.preventDefault();
        popup.classList.add("modal-error");
    }
});