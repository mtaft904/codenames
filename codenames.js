const grid = document.getElementById("grid");

function makeRows(rows, cols) {
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    grid.appendChild(cell).className = "item";
    cell.textContent = "Item " + c;
    cell.classList.add(assignTeams(c));
    cell.addEventListener('click', ()=> {
      cell.classList.add("clicked");
    });
  };
};

makeRows(5, 5);

const items = document.querySelectorAll(".item");

function assignTeams(number){
  if(number%2==0){
    return "red";
  }
  return "blue";
}

const spymaster = document.getElementById("spymaster");
spymaster.addEventListener('click', ()=>{
  items.forEach((item) => {
      item.classList.add("spymaster");
  });
});

const spy = document.getElementById("spy");
spy.addEventListener('click', ()=>{
  items.forEach((item) => {
      item.classList.remove("spymaster");
  });
});
