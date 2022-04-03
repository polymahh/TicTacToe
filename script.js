(function (){
    let gameBoard = {
        moves : [],
        player : '',
        isPlayer : false,
        init: function (){
            this.cacheDom();
            this.bindEvents();
            this.setPlayer('O');
            this.render();
        },
        cacheDom : function () {
            this.board = document.querySelector('.game-board');
            this.playerO = document.querySelector('.player-o');
            this.playerX = document.querySelector('.player-x');
            this.restart = document.querySelector('.restart');
            this.cells = document.querySelectorAll('.move')
        },
        render : function () {
            if (this.player === 'X') {
                this.playerX.style.border = "thick solid #0000FF";
                this.playerO.style.border = "none";
            }else {
                this.playerX.style.border = "none";
                this.playerO.style.border = "thick solid #0000FF";
            }
        },
        
        bindEvents : function () {
            this.playerX.addEventListener('click', () =>this.setPlayer('X'));
            this.playerO.addEventListener('click', () =>this.setPlayer('O'));
            this.restart.addEventListener('click', () =>this.setRestart());
            this.cells.forEach((item) => {item.addEventListener('click', () => this.setMove(item))})
        },
        setPlayer : function (val) {
            this.player = val ;
            this.render();
            
        },
        setMove : function (item) {
            this.playerX.removeEventListener('click',this.setPlayer());
            if(item.textContent === ''){
                this.moves.push(item);
                item.classList.add(this.player);
                item.textContent = this.player ;
                this.gamePlay();
                this.switchPlayer();
                this.render();
            }
            
            
        },
        setRestart : function () {
            this.cells.forEach(item => {item.textContent = '';})
        },
        switchPlayer : function () {
            if (this.player === 'O'){
                this.player = 'X';
            } else if(this.player === 'X'){
                this.player = 'O';
            }
        },
        gamePlay : function(){
            let topx = this.moves.filter((item) => {
                if (item.classList.contains('top') && item.classList.contains('X')){
                    return true;
                }
            });
            let midx = this.moves.filter((item) => {
                if (item.classList.contains('mid') && item.classList.contains('X')){
                    return true;
                }
            });
            let botx = this.moves.filter((item) => {
                if (item.classList.contains('bot') && item.classList.contains('X')){
                    return true;
                }
            });
            let ax = this.moves.filter((item) => {
                if (item.classList.contains('a') && item.classList.contains('X')){
                    return true;
                }
            });
            let bx = this.moves.filter((item) => {
                if (item.classList.contains('b') && item.classList.contains('X')){
                    return true;
                }
            });
            
            let topo = this.moves.filter((item) => {
                if (item.classList.contains('top') && item.classList.contains('O')){
                    return true;
                }
            });
            let mido = this.moves.filter((item) => {
                if (item.classList.contains('mid') && item.classList.contains('O')){
                    return true;
                }
            });
            let boto = this.moves.filter((item) => {
                if (item.classList.contains('bot') && item.classList.contains('O')){
                    return true;
                }
            });
            let ao = this.moves.filter((item) => {
                if (item.classList.contains('a') && item.classList.contains('O')){
                    return true;
                }
            });
            let bo = this.moves.filter((item) => {
                if (item.classList.contains('b') && item.classList.contains('O')){
                    return true;
                }
            });
            
            if (topx.length === 3 || midx.length === 3 || botx.length === 3 
                || ax.length === 3 || bx.length === 3
                || topo.length === 3 || mido.length === 3 || boto.length === 3
                || ao.length === 3 || bo.length === 3
                ){
                alert (this.player + ' wins')
            }
        },

       

        

    };
    
    gameBoard.init();

})();


