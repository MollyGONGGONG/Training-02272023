// console.log("hello");

// console.log(document.getElementById("root"));

function foo() {
  console.log(this);
}

// foo();

let root = document.getElementById("root");
root.addEventListener("click", (event) => {
  alert("target: " + event.target + ", currentTarget: " + event.currentTarget);
});
