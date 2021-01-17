const grid = document.getElementById("grid");

function makeRows(rows, cols) {
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    grid.appendChild(cell).className = "item";
    cell.textContent = "Item " + c;
  };
};

makeRows(5, 5);

const spymaster = document.getElementById("spymaster");
spymaster.addEventListener('click', ()=>{
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
      item.classList.add("spymaster");
  });
});

const spy = document.getElementById("spy");
spy.addEventListener('click', ()=>{
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
      item.classList.remove("spymaster");
  });
});
