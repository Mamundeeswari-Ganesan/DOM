//collections
let paragraph = document.getElementsByTagName("p");

for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].style.color = "red";
  paragraph[i].style.fontFamily = "sans-serif";
}

//class
let class1 = document.getElementsByClassName("class1");
for (let i = 0; i < class1.length; i++) {
  class1[i].style.color = "yellow";
}
//selecting particulat element
let items = document.getElementById("list");
let itemP = items.getElementsByTagName("li");
items.style.color = "blue";
for (let i = 0; i < itemP.length; i++) {
  itemP[i].textContent = itemP[i].textContent + "!!!";
}

//event listeners
submit.addEventListener("click", function () {
  let value1 = Number(document.getElementById("input1").value);
  let value2 = Number(document.getElementById("input2").value);

  let result = value1 + value2;
  document.getElementById("result").value = result;
});

reset.addEventListener("click", function () {
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("result").value = "";
});

let list = document.getElementById("list");
let listItems = list.getElementsByTagName("li");
// for (let i = 0; i < listItems.length; i++) {
//   console.log(listItems[i]);
//   listItems[i].style.visibility = "visible"; // Correct spelling
// }

function showItems(index = 0) {
  if (index < listItems.length) {
    listItems[index].style.visibility = "visible";
    index++;
    setTimeout(() => showItems(index), 1000); // Schedule the next fruit
  }
}

// Call the function
showItems();
let page = document.getElementById("page");
let dark = document.getElementById("dark");
dark.addEventListener("click", function () {
  console.log("button clicked", dark);
  page.classList.add("dark");
});
