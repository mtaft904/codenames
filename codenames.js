const grid = document.getElementById("grid");


let teamsArray = assignTeams();
console.log(teamsArray);

function makeRows(rows, cols) {
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    grid.appendChild(cell).className = "item";
    let randomWord = words[Math.floor(Math.random() * words.length)];
    cell.textContent = randomWord;
    cell.classList.add(teamsArray[c]);
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
const spy = document.getElementById("spy");

spymaster.addEventListener('click', ()=>{
  items.forEach((item) => {
      item.classList.add("spymaster");
      spymaster.style.backgroundColor = "grey";
      spy.style.backgroundColor = "orange";
  });
});

spy.addEventListener('click', ()=>{
  items.forEach((item) => {
      item.classList.remove("spymaster");
      spy.style.backgroundColor = "grey";
      spymaster.style.backgroundColor = "orange";
  });
});

const newGame = document.getElementById("new-game");
newGame.addEventListener('click', ()=>{
  teamsArray = assignTeams();
  console.log(teamsArray);
  items.forEach((item, i) => {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    item.textContent = randomWord;
    item.classList.remove("clicked");


    if (item.classList.contains("red")){
      item.classList.remove("red");
    }
    if (item.classList.contains("blue")){
      item.classList.remove("blue");
    }
    if (item.classList.contains("bomb")){
      item.classList.remove("bomb");
    }
    if (item.classList.contains("neutral")){
      item.classList.remove("neutral");
    }
    item.classList.add(teamsArray[i]);


  });

})
