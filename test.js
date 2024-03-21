const menu = document.querySelector("h1");

menu.addEventListener("click", clickfunc);

function clickfunc() {
    menu.textContent = textContent("hogeee");
}