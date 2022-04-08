let gameObject ={
gameBoard :['','','','','','','','',''],
init () {
    this.cacheDom();
    this.bindEvents();
    this.render();

},
cacheDom (){
    this.board = document.querySelector('.game-board');
    this.moves = document.querySelectorAll('.move');
    this.restart = document.querySelector('.restart');
    this.playerO = document.querySelector('.player-o');
    this.playerX = document.querySelector('.player-x');
    
},
render (){
    this.moves.textContent = '';
    this.moves.forEach((e) => {
        e.textContent = this.gameBoard[e.id]
    })
    
    
},
bindEvents (){
    this.board.addEventListener('click',(e) => {gamePlay.setMove(e.target)});
    this.restart.addEventListener('click', () =>this.setRestart());
    
        
},
setRestart : function () {
    this.gameBoard = ['','','','','','','','',''] ;
    this.render();
},

}

gameObject.init();

const gamePlay = (function (){

    let playerX = false;
    let player = 'O'
    let winner = '';
    gameObject.playerO.style.border = "thick solid #0000FF";

    const winningStreaks = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    const switchPlayer = () => {
        playerX = !playerX
        if (playerX == true){
            player = 'X';
            gameObject.playerX.style.border = "thick solid #0000FF";
            gameObject.playerO.style.border = "none";
        }else {
            player = 'O';
            gameObject.playerX.style.border = "none";
            gameObject.playerO.style.border = "thick solid #0000FF";
        }
    } 

    const setMove = (item) => {
        if(item.textContent === ''){
            gameObject.gameBoard.splice(item.id, 1, player)
            item.classList.add(player);
            gameObject.render();
            getWinner();
            switchPlayer();
        }
    }

    const getWinner = () => {
       
        let movesO = gameObject.gameBoard.map((item,index) => {
            if (item === ('O')){
                return index;
            }
        });
        
        let movesX = gameObject.gameBoard.map((item,index) => {
            if (item === ('X')){
                return index;
            }else return '';
        });
        
        let winStreak = () => { 
            winningStreaks.map((combination) => {
                if (combination.every(item => movesO.includes(item))){
                    winner = player
                    winningMsg(winner);
                }
                else if (combination.every(item => movesX.includes(item))){
                    winner = player
                    winningMsg(winner);
                }

            })
        } 

        let winningMsg = (msg) => {
            alert(`Winner is Player ${msg} `)
        }

        winStreak();
    }
    return {setMove}
})()


