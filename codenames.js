const grid = document.getElementById("grid");


const teamsArray = assignTeams();
console.log(teamsArray);

function makeRows(rows, cols) {
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    grid.appendChild(cell).className = "item";
    cell.textContent = "Item " + c;
    cell.classList.add(teamsArray[c]);
    //console.log(cell.classList);
    cell.addEventListener('click', ()=> {
      cell.classList.add("clicked");
    });
  };
};

makeRows(5, 5);

const items = document.querySelectorAll(".item");

function assignTeams(){
  const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  let newArray = new Array(25);
  for (i=0; i<25; i++){
    const randomNum = Math.floor(Math.random()*array.length);
    const arrayElement = array[randomNum];
    console.log("random number: ", arrayElement);
    if(i < 9){
      newArray[arrayElement] = "blue";
    }
    else if (i <17){
      newArray[arrayElement] = "red";
    }
    else if (i == 17){
      newArray[arrayElement] = "bomb";
    }
    else {
      newArray[arrayElement] = "neutral";
    }
    array.splice(randomNum, 1);

  }
  return newArray;
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
