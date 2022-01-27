let mobilemenu = document.getElementById("mb");
let mobilemenuview = document.getElementById("tb");
let home = document.getElementById("home");

mobilemenu.addEventListener("click", function () {
  mobilemenuview.style = "display:block";
});

home.addEventListener("click", function () {
  mobilemenuview.style = "display:none";
});
