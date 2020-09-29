function startGame() {

    let score = 0;
    let points = document.getElementById("points");
    let root = document.getElementById("root");
    let newGame = document.getElementById("start");
    let congrats = document.getElementById("congrats");
    const loss = document.getElementById("loss");
    let bombIndex = Array.from({length: 10}, () => Math.floor(Math.random() * 82));
    let visited = [];
    let gameOver = false;

    // create row and cols
    for(let i = 0; i < 9; i++) {
        let row = document.createElement("div");
        row.style.height = "50px";
        for (let j = 0; j < 9; j++) {
            let currIdx = i*9+j;
            let cell = document.createElement("div");

            cell.style.height = "50px";
            cell.style.width = "50px";
            cell.innerHTML = "";
            cell.style.display = "inline-block"
            cell.style.border = "1px solid black";
            /* cell.style.cursor = "pointer"; */
            cell.style.backgroundColor = "lightblue";
            cell.setAttribute("id", currIdx);
            
            cell.addEventListener("click", () => {
                if(!bombIndex.includes(currIdx) && !gameOver) {
                    if(!visited.includes(currIdx)) {
                        visited.push(currIdx);
                        ++score;
                        points.innerHTML = "Score: "+score;
                        cell.style.backgroundColor = "lightgreen";

                        if(score > 71) {
                            congrats.style.display = "block";
                            newGame.style.display = "block";
                        }
                    }
                } else {
                    for (let index = 0; index < 10; index++) {
                        gameOver = true;
                        let mine = bombIndex[index];
                        let mineNode = document.getElementById(mine);
                        mineNode.style.background = "red";
                        mineNode.style.position = "relative";
                        mineNode.style.bottom = 35;
                        mineNode.innerHTML = "💣";
                    }
                    if(score < 71)
                        loss.style.display = "block";
                    
                    newGame.style.display = "block";
                }
            });
            
            row.appendChild(cell);
        }
        root.appendChild(row);
    }

    newGame.addEventListener("click", () => {
        location.reload();
    })
}
startGame();
