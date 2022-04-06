let gameObject ={
gameBoard :['','','','','','','','',''],
init () {
    this.cacheDom();
    this.bindEvents();
    this.render();

},
cacheDom (){
    this.board = document.querySelector('.game-board');
    this.moves = this.board.childNodes;
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
    console.log(this)
    this.gameBoard.forEach(item => {item = ''})
    console.log(this.gameBoard)
},

}

gameObject.init();

const gamePlay = (function (){

    let playerX = false;
    let player = 'O'
    gameObject.playerO.style.border = "thick solid #0000FF";

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
            console.log(gameObject.gameBoard)
            gameObject.render();
            switchPlayer();
        }
    }

    const winningLogic = () => {

    }
    return {setMove}
})()


