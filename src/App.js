import React from 'react';
import ReactDOM from "react-dom";
import useGameState  from './useGameState';
import Tile from './Tile';
import './App.css'

const App = () => {
	const [board, moves, solved, newGame, undo, move] = useGameState()
	return (
	<div className='game-container'>
		<div className='game-header'>
		<div className='moves'>{moves}</div>
		<button className='big-button' onClick={undo}> yza </button></div>
		<div className='board'>
		{
		  board.slice(0,-1).map((pos, index) => (
			<Tile index={index} pos={pos} onClick={move(index)} key={index}/>))
		}
		{ solved && 
		<div className='overlay'>
			<button className='button' onClick={newGame}>
				Tazeden synanyshyp bilersiniz 
			</button>
		</div>
		}
		</div>
	  </div>
    );
};
   
export default App;

