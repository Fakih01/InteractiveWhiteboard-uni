import React from 'react';
import Board from '../board/Board';
import'./style.css';

class Container extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

            return(
                <div className='container'>
                    <div className='colour-picker-container'>
                        <input type="colour" />
                    </div>
                    <div className='board-container'>
                        <Board> </Board>
                    </div>
                </div>
            )
    }
}

export default Container 