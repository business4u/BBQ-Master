function toggleMenu() {
    var menu = document.getElementById("sideMenu");
    if (menu.style.width === "250px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "250px";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log("BBQ Restaurant website loaded.");
});
