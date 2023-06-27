const icon = document.querySelector(".icon-menu");
const toggol = document.querySelector(".toggol_menu");
//const xmenu = document.querySelector(".Xmenu");

icon.addEventListener("click", () => {
  // vector.style.display = "none";
  toggol.style.left = "0";
});

document.querySelectorAll(".menu_form > li").forEach((sync) =>
  sync.addEventListener("click", () => {
    toggol.style.left = "100%";
    icon.style.display = "block";
  })
);

/*xmenu.addEventListener("click", () => {
  popwrap.style.left = "100%";
  vector.style.display = "block";
});*/