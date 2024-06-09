console.log("Hello World");
const h1 = document.querySelector("h1");
console.log(h1);
const allH1 = document.querySelectorAll("h1");
console.log(allH1);
const h1ByClassTitle = document.querySelector(".title");
console.log(h1ByClassTitle);
const h2ByIdLogo = document.querySelector("#logo");
console.log(h2ByIdLogo);

console.log(h1);
console.dir(h1);
console.log(h1.innerText);
h1.innerText = "Welcome To My Website";
console.dir(h1ByClassTitle);
h1ByClassTitle.style.backgroundColor = "red";
h1ByClassTitle.style.color = "white";
h1ByClassTitle.style.padding = "20px";
