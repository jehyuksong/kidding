const jehyukImage = document.querySelector(".jehyuk-image");
const gosuImage = document.querySelector(".gosu-image");
const scream = new Audio("sounds/scream.mp3");

jehyukImage.addEventListener("click", function () {
  if (jehyukImage.getAttribute("src") === "images/jehyuk.png") {
    jehyukImage.setAttribute("src", "images/jehyukPick.png");
  } else {
    jehyukImage.setAttribute("src", "images/jehyuk.png");
  }
});

gosuImage.addEventListener("click", function () {
  if (gosuImage.getAttribute("src") === "images/gosu.png") {
    gosuImage.setAttribute("src", "images/gosuPick.png");
    scream.play();
  } else {
    gosuImage.setAttribute("src", "images/gosu.png");
  }
});
