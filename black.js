

let boxes = document.querySelectorAll(".btn");
let resetbtn = document.querySelector(".reset")
let newGameBtn = document.querySelector(".new")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let turnO = true;
  winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
  ];

  const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")
 };

  boxes.forEach((btn) => {
    btn.addEventListener("click",() => {
        if(turnO) {
            btn.innerText = "o";
            turnO = false;
        }else{
            btn.innerText = "x"
            turnO = true;
        }
        btn.disabled = true;
        checkWinner();
    })
  });
  const disableBoxes = () => {
    for(let btn of boxes){
        btn.disabled = true;
    }
  }
  const enableBoxes = () => {
    for(let btn of boxes){
        btn.disabled = false;
        btn.innerText = ""
    }
  }

 
  

  let showWinner = (winner) => {
msg.innerText = `congratulation , winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
  };

const checkWinner = () => {
    for(let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if(pos1val != "" && pos2val != "" && pos3val != ""  ){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("winner",pos1val);
            
            showWinner (pos1val);
            
            
        }
    }
        }
}
  newGameBtn.addEventListener("click",resetGame);
   resetbtn.addEventListener("click",resetGame);
 
