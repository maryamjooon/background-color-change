
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener('click', function(){
 modal.classList.add("open-modal");
});

closeBtn.addEventListener('click', function(){
    console.log('s;dflksdf;l');
 modal.classList.remove("open-modal");  
});

// function myFunction() {
//     var x = document.getElementById("modal-overlay");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }