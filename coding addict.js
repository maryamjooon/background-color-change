const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function () {
    // console.log(links.classList);
    // console.log(links.classList.contains('random'));
    // console.log(links.classList.contains('links'));
    if (links.classList.contains('show-links')) {
        links.classList.remove('show-links')
    } else {
        links.classList.add("show-links");
    }
    links.classList.toggle('show-links')
});

// horizenral

(function () {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        console.log(event.pageY);
        if (event.pageY < 130) {
            console.log("Top SHOE");
            var element = document.getElementById("top-nav-bar");
            element.classList.add("top");
        } else {
            var element = document.getElementById("top-nav-bar");
            element.classList.remove("top");
        }
    }
})();

// vertical

(function () {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        console.log(event.pageX);
        if (event.pageX < 450) {
            console.log("Side SHOE");

            var element = document.getElementById("side-nav-bar");
            element.classList.add("side");
        } else {
            var element = document.getElementById("side-nav-bar");
            element.classList.remove("side");
        }
    }
 })();

