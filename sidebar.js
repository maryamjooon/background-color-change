const toggleBtn = document.querySelector(".sidebar-toggle")
const closeBtn = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar")

toggleBtn.addEventListener('click', function(){
    console.log(sidebar.classList);
    // if(sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.remove('show-sidebar')
    // }else {
    //     sidebar.classList.add('show-sidebar')
    // }
    sidebar.classList.toggle('show-sidebar');
});
closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar')
});

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

 window.onload = function(){
    document.getElementById('close').onclick = function(){
        this.parentNode.parentNode.remove();
        return false;
    };
};

function myFunction() {
    var element = document.getElementById("side-nav-bar");
    element.classList.toggle("side");
 }


