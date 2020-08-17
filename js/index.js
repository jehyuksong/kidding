const jehyukImage = document.querySelector(".jehyuk-image");
const gosuImage = document.querySelector(".gosu-image");
const scream = new Audio("sounds/scream.mp3");
const btn = document.createElement("button");
const btnText = document.createTextNode("닫기");

jehyukImage.addEventListener("click", function () {
  if (jehyukImage.getAttribute("src") === "images/jehyuk.png") {
    jehyukImage.setAttribute("src", "images/jehyukPick.png");
    jehyukImage.classList.add("bigger-jehyuk");
  } else {
    jehyukImage.setAttribute("src", "images/jehyuk.png");
    jehyukImage.classList.remove("bigger-jehyuk");
  }
});

gosuImage.addEventListener("click", function () {
  if (gosuImage.getAttribute("src") === "images/gosu.png") {
    gosuImage.setAttribute("src", "images/gosuPick.png");
    scream.play();
    gosuImage.classList.add("bigger-gosu");
    btn.appendChild(btnText);
    document.body.appendChild(btn);
    btn.classList.add("close-button");
    btn.classList.remove("invisible");
    btn.addEventListener("click", function () {
      for (let i = 0; i < 100; i++) {
        alert("선택을 잘해야지ㅎㅎ");
      }
    });
    const choice = function () {
      alert("선택을 잘해야지 ^^");
    };
    setInterval(choice, 1000);
  } else {
    gosuImage.setAttribute("src", "images/gosu.png");
    gosuImage.classList.remove("bigger-gosu");
    for (let i = 0; i < 100; i++) {
      alert("선택을 잘해야지ㅎㅎ");
    }
    btn.classList.add("invisible");
  }
});
