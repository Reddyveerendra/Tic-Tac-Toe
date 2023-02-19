const layout = document.getElementById("container");
var arr = ["", "", "", "", "", "", "", "", ""];
console.log(arr);
function createLayout() {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div")
        cell.className = "cell";
        cell.id = `${i}`
        layout.appendChild(cell);
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
    if (n == 8) {
        restart();
    }
    n += 1;
}
function restart() {
    while (layout.firstElementChild) {
        layout.removeChild(layout.lastElementChild);
    }
    arr = ["", "", "", "", "", "", "", "", ""];
    n = 0;
    createLayout();
}

