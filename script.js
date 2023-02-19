const layout = document.getElementById("container");
let arr = ["", "", "", "", "", "", "", "", ""];
var Player1 = "Player1";
var Player2 = "Player2";
function playerData() {
    Player1 = window.prompt("Your question");
    Player2 = window.prompt("Your question");
}
function createLayout() {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div")
        cell.className = "cell";
        cell.id = `${i}`
        layout.appendChild(cell);
        if (i % 2 != 0) {
            cell.style.background = "white";
            cell.style.color = "black";
        }
        else {
            cell.style.background = "black";
            cell.style.color = "white";
        }
    }
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("click", handleClick));
}
createLayout()
var n = 0;

function handleClick(e) {
    if (n % 2 == 0) {
        document.getElementById(e.target.id).textContent = "X";
        arr[parseInt(e.target.id)] = "X";
    }
    else {
        document.getElementById(e.target.id).textContent = "O"
        arr[parseInt(e.target.id)] = "O";
    }
    console.log(arr);
    n += 1;
    if (((((arr[0] == "O" && (arr[3] == "O" && arr[6] == "O")) || (arr[1] == "O" && (arr[4] == "O" && arr[7] == "O"))) || (arr[2] == "O" && (arr[5] == "O" && arr[8] == "O"))) || (((arr[0] == "O" && (arr[1] == "O" && arr[2] == "O")) || (arr[3] == "O" && (arr[4] == "O" && arr[5] == "O"))) || (arr[8] == "O" && (arr[7] == "O" && arr[6] == "O")))) || ((arr[0] == "O" && (arr[4] == "O" && arr[8] == "O")) || (arr[2] == "O" && (arr[4] == "O" && arr[6] == "O")))) {
        alert(`${Player2} won the match`)
        restart();
    }
    else if ((((arr[0] == "X" && (arr[3] == "X" && arr[6] == "X")) || (arr[1] == "X" && (arr[4] == "X" && arr[7] == "X")) || (arr[2] == "X" && (arr[5] == "X" && arr[8] == "X"))) || (((arr[0] == "X" && (arr[1] == "X" && arr[2] == "X")) || (arr[3] == "X" && (arr[4] == "X" && arr[5] == "X"))) || (arr[8] == "X" && (arr[7] == "X" && arr[6] == "X")))) || ((arr[0] == "X" && (arr[4] == "X" && arr[8] == "X")) || (arr[2] == "X" && (arr[4] == "X" && arr[6] == "X")))) {
        alert(`${Player1} won the match`);
        restart();
    }
    else {
        console.log("no");
    }
    if (n == 9) {
        alert("Draw match")
        restart();
    }
    console.log(n)
}
function restart() {
    while (layout.firstElementChild) {
        layout.removeChild(layout.lastElementChild);
    }
    arr = ["", "", "", "", "", "", "", "", ""];
    n = 0;
    createLayout();
}

