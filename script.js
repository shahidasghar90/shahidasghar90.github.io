// m-btn class
// menu id

// var toggle = document.getElementsByClassName("m-btn")[0];
// var menu = document.getElementById("menu");

// toggle.onclick = function() {
//     var hidden = menu.style.visibility === "hidden";
//     menu.style.visibility = hidden ? "visible" : "hidden";
//     console.log(hidden);
// };



var toggle = document.getElementsByClassName("m-btn")[0];

toggle.onclick = function() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


