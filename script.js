const layout = document.getElementById("container");
let arr = ["", "", "", "", "", "", "", "", ""];
var Player1 = "Player1";
var Player2 = "Player2";
function playerData() {
    Player1 = window.prompt("Please enter player1 name");
    Player2 = window.prompt("Please enter player2 name");
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
    for (let j = 0; j < 3; j++) {
        if ((arr[j] == "O" && (arr[j + 3] == "O" && arr[j + 6] == "O")) || (arr[j] == "O" && (arr[j + 1] == "O" && arr[j + 2] == "O"))) {
            alert(`${Player2} won the match`)
            restart();
        }
        if ((arr[j] == "X" && (arr[j + 3] == "X" && arr[j + 6] == "X")) || (arr[j] == "X" && (arr[j + 1] == "X" && arr[j + 2] == "X"))) {
            alert(`${Player1} won the match`);
            restart();
        }
    }
    if ((arr[0] == "O" && (arr[4] == "O" && arr[8] == "O")) || (arr[2] == "O" && (arr[4] == "O" && arr[6] == "O"))) {
        alert(`${Player2} won the match`);
        restart();
    }
    if ((arr[0] == "X" && (arr[4] == "X" && arr[8] == "X")) || (arr[2] == "X" && (arr[4] == "X" && arr[6] == "X"))) {
        alert(`${Player1} won the match`);
        restart();
    }
    if (n == 9) {
        alert("Draw match")
        restart();
    }
}
function restart() {
    while (layout.firstElementChild) {
        layout.removeChild(layout.lastElementChild);
    }
    arr = ["", "", "", "", "", "", "", "", ""];
    n = 0;
    createLayout();
}

