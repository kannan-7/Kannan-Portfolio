const text = document.querySelector("#text");
const nameInput = document.querySelector("#nameInput");
const submitName = document.querySelector("#submitName");
nameInput.addEventListener("input", function (e) {
  console.log(e.target.value);
});

submitName.addEventListener("click", function () {
  console.log("Button clicked");
  console.log(nameInput.value);
  const name = nameInput.value;
  text.innerText = "Hello " + name;
});

// Below Notes are for learning purpose and up one is the Greeting java

function greet() {
  console.log("Hello World");
}
greet();
greet();
greet();

function greetWithName(name) {
  console.log("Hello " + name);
}

greetWithName("john");
greetWithName("Kannan");

function greetWithNameAndAge(name, age) {
  console.log("Hello " + name + ", you are " + age + " years old");
}

greetWithNameAndAge("Kannan", 45);

function add(a, b) {
  return a + b;
}

const result = add(10, 20);
console.log(result);
