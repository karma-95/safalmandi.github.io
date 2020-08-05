function slideshow() {
    var x = document.getElementById('showbar');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


var btn = document.querySelector(".showform"),
    form = document.querySelector(".bigform"),
    x = document.querySelector(".x");

btn.addEventListener("click", appear)

function appear() {
    form.style.display = "flex";
}

x.addEventListener("click", disappearx);

function disappearx() {
    form.style.display = "none";
}

function toggleForm() {
    var container = document.querySelector('.container');
    container.classList.toggle('active');
}