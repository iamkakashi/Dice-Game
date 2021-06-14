function fun() {
  var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
  var a = "images/dice" + randomNumber1 + ".png";
  var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
  var b = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", a);
  document.querySelectorAll("img")[1].setAttribute("src", b);
  if (a > b) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
  } else if (b > a) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }
}
