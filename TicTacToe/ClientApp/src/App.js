import React, { Component } from 'react';
import './StyleSheet.css'

export default class App extends Component {
    displayName = App.name

    constructor(props) {
        super(props);
        this.state = {
            currentPlayer: 'X',
            stopReswitch: false,
            board:[null, null, null,
                null, null, null,
                null, null, null],
            winner: ""
        }


        this.boardClick = this.boardClick.bind(this);
    }

    boardClick( event) {
        event.preventDefault();
        var x = event.layerX;
        var y = event.layerY;
        var tempBoard = this.state.board;
        if (x < 120 && y < 120) {
            if (tempBoard[0] != null) {
                alert("invalid location please pick another location");
                return;
            }
            this.fillXO(0);
            tempBoard[0] = this.state.currentPlayer;
        }
        else if (x < 240 && y < 120) {
            if (tempBoard[1] != null) {
                alert("invalid location please pick another location");
                return;
            }
            this.fillXO(1);
            tempBoard[1] = this.state.currentPlayer;
        }
        else if (x < 360 && y < 120) {
            if (tempBoard[2] != null) {
                alert("invalid location please pick another location");
                return;
            }
            this.fillXO(2);
            tempBoard[2] = this.state.currentPlayer;
        }
        else if (x < 120 && y <240) {
            if (tempBoard[3] != null) {
                alert("invalid location please pick another location");
                return;
            }
            this.fillXO(3);
            tempBoard[3] = this.state.currentPlayer;
        }
        else if (x < 240 && y < 240) {
            if (tempBoard[4] != null) {
                alert("invalid location please pick another location");
                return;
            }
            this.fillXO(4);
            tempBoard[4] = this.state.currentPlayer;
        }
        else if (x < 360 && y < 240) {
            if (tempBoard[5] != null) {
                alert("invalid location please pick another location");
                return;
            }

            this.fillXO(5);
            tempBoard[5] = this.state.currentPlayer;
        }
        else if (x < 120 && y < 360) {
            if (tempBoard[6] != null) {
                alert("invalid location please pick another location");
                return;
            }
            this.fillXO(6);
            tempBoard[6] = this.state.currentPlayer;
        }
        else if (x < 240 && y < 360) {
            if (tempBoard[7] != null) {
                alert("invalid location please pick another location");
                return;
            }
            this.fillXO(7);
            tempBoard[7] = this.state.currentPlayer;
        }
        else if (x < 360 && y < 360) {
            if (tempBoard[8] != null) {
                alert("invalid location please pick another location");
                return;
            }
            this.fillXO(8);
            tempBoard[8] = this.state.currentPlayer;
        }
        this.setState({ board: tempBoard });
        this.endRound();
        
        if (this.state.currentPlayer === 'X' && !this.state.stopReswitch) {
            this.setState({
                currentPlayer: 'O'
            });
        }
        else if (this.state.currentPlayer === 'O' &&!this.state.stopReswitch) {
            this.setState({
                stopReswitch: true
            });
        }
        else if (this.state.currentPlayer === 'O' && this.state.stopReswitch){
            this.setState({
                currentPlayer: 'X'
            })
        }
        else if (this.state.currentPlayer === 'X' && this.state.stopReswitch) {
            this.setState({
                stopReswitch: false
            })
        }
    };

    endRound() {
        if (this.state.board[0] == this.state.board[1] && this.state.board[0] == this.state.board[2] && this.state.board[0] != null) {
            this.setState({ ['winner']: this.state.board[0] })
            this.clearBoard();
        }
        else if (this.state.board[0] == this.state.board[3] && this.state.board[0] == this.state.board[6] && this.state.board[0] != null) {
            this.setState({ ['winner']: this.state.board[0] })
            this.clearBoard();
        }
        else if (this.state.board[0] == this.state.board[4] && this.state.board[0] == this.state.board && this.state.board[0] != null[8]) {
            this.setState({ ['winner']: this.state.board[0] })
            this.clearBoard();
        }
        else if (this.state.board[1] == this.state.board[4] && this.state.board[1] == this.state.board[7] && this.state.board[1] != null) {
            this.setState({ ['winner']: this.state.board[1] })
            this.clearBoard();
        }
        else if (this.state.board[2] == this.state.board[5] && this.state.board[2] == this.state.board[8] && this.state.board[2] != null) {
            this.setState({ ['winner']: this.state.board[2] })
            this.clearBoard();
        }
        else if (this.state.board[2] == this.state.board[4] && this.state.board[2] == this.state.board[6] && this.state.board[2] != null) {
            this.setState({ ['winner']: this.state.board[2] })
            this.clearBoard();
        }
        else if (this.state.board[3] == this.state.board[4] && this.state.board[3] == this.state.board[5] && this.state.board[3] != null) {
            this.setState({ ['winner']: this.state.board[3] })
            this.clearBoard();
        }
        else if (this.state.board[6] == this.state.board[7] && this.state.board[6] == this.state.board[8] && this.state.board[6] != null) {
            this.setState({ ['winner']: this.state.board[6] })
            this.clearBoard();
        }
        else {
            var tie = true;
            this.state.board.forEach(function (element) {
                if (element == null) {
                    tie = false;
                }
            })

            if (tie == true) {
                alert("The game is a tie");
                this.clearBoard();
            }
        }

        
    }

    clearBoard() {

        const board = this.refs.board;
        const ctx = board.getContext("2d");
        ctx.clearRect(0,0,board.width, board.height)
        this.fillLines();
        this.setState({
            currentPlayer: 'X',
            board: [null, null, null,
                null, null, null,
                null, null, null]
        })
    }


    fillXO( pos ) {
        const board = this.refs.board;
        const ctx = board.getContext("2d");
        ctx.font = "60px Arial";
        if (pos == 0) {
            ctx.fillText(this.state.currentPlayer, 30, 80);
        }
        else if (pos == 1) {
            ctx.fillText(this.state.currentPlayer, 150, 80);
        }
        else if (pos == 2) {
            ctx.fillText(this.state.currentPlayer, 280, 80);
        }
        else if (pos == 3) {
            ctx.fillText(this.state.currentPlayer, 30, 200);
        }
        else if (pos == 4) {
            ctx.fillText(this.state.currentPlayer, 150, 200);
        }
        else if (pos == 5) {
            ctx.fillText(this.state.currentPlayer, 280, 200);
        }
        else if (pos == 6) {
            ctx.fillText(this.state.currentPlayer, 30, 320);
        }
        else if (pos == 7) {
            ctx.fillText(this.state.currentPlayer, 150, 320);
        }
        else if (pos == 8) {
            ctx.fillText(this.state.currentPlayer, 280, 320);
        }
    }

    fillLines() {
        const board = this.refs.board;
        const ctx = board.getContext("2d");
        ctx.moveTo(120, 0);
        ctx.lineTo(120, 400);
        ctx.stroke();
        ctx.moveTo(240, 0);
        ctx.lineTo(240, 400);
        ctx.stroke();
        ctx.moveTo(0, 120);
        ctx.lineTo(400, 120);
        ctx.stroke();
        ctx.moveTo(0, 240);
        ctx.lineTo(400, 240);
        ctx.stroke();
    }
    

    componentDidMount() {
        const board = this.refs.board;
        const ctx = board.getContext("2d");
        board.addEventListener('click', this.boardClick)
        this.fillLines();
    }

  render() {
    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <h2>Click a blank position on the board to place an X. To win get 3 X/O's in a row. Do not let the other player get 3 in a row.</h2>
            <canvas id="board" ref="board" width="360px" height="360px" onClick={event => this.boardClick(event)} />
            <h2>Current Player:</h2>
            <div>{this.state.currentPlayer}</div>
            <h2>Last Winner</h2>
            <div>{this.state.winner}</div>
        </div>
    );
  }
}
