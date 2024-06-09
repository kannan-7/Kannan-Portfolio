const btnMenu = document.querySelector("#btnMenu");
const pr1 = document.querySelector("#pr1");
const pr2 = document.querySelector("#pr2");
const pr3 = document.querySelector("#pr3");
const pr4 = document.querySelector("#pr4");
const pr5 = document.querySelector("#pr5");
const pr6 = document.querySelector("#pr6");
const envelope = document.querySelector("#envelope");
const linkedin = document.querySelector("#linkedin");
const whatsapp = document.querySelector("#whatsapp");
const github = document.querySelector("#github");

btnMenu.addEventListener("click", function () {
  console.log("btn Clicked");
  window.open("Day-1/page2.html", "_blank");
});

pr1.addEventListener("click", function () {
  console.log("pr1 picture clicked");
  window.open("Day-4/box-model/box-model.html", "_blank");
});

pr2.addEventListener("click", function () {
  console.log("pr2 picture clicked");
  window.open("Day-5/digital-agency/digital-agency.html", "_blank");
});

pr3.addEventListener("click", function () {
  console.log("pr3 picture clicked");
  window.open("index.html", "_blank");
});

pr4.addEventListener("click", function () {
  console.log("pr4 picture clicked");
  window.open("Day-8/greetings/BMI-Calculator/BMI-Calculator.html", "_blank");
});

pr5.addEventListener("click", function () {
  console.log("pr5 picture clicked");
  window.open("Day-12/todo-app/todo-app.html", "_blank");
});

pr6.addEventListener("click", function () {
  console.log("pr6 picture clicked");
  window.open("Day-9/Packman/Packman.html", "_blank");
});

envelope.addEventListener("click", function () {
  console.log("envelope picture clicked");
  window.open("mailto:recipient@example.com", "_blank");
});

linkedin.addEventListener("click", function () {
  console.log("linkedin picture clicked");
  window.open(
    "https://www.linkedin.com/in/kannan-karapiah-32795116b/",
    "_blank"
  );
});

whatsapp.addEventListener("click", function () {
  console.log("whatsapp picture clicked");
  window.open("http://wa.me/60126227703", "_blank");
});

github.addEventListener("click", function () {
  console.log("github picture clicked");
  window.open("https://github.com/kannan-7/Kannan-Portfolio", "_blank");
});
