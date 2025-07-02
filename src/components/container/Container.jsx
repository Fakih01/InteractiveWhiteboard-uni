import React from 'react';
import Board from '../board/Board';
import'./style.css';

class Container extends React.Component{

    constructor(props){
        super(props);

        this.state= {
            color: '#000000',
            size: '5'
        }
    }

    changeColour(params){
        this.setState({
            color: params.target.value
        })

    }

    changeSize(params){
        this.setState({
            size: params.target.value
        })

    }

    render(){

            return(
                <div className='container'>
                    <div class="edit-pen">
                    <div className='color-picker-container'>
                        Select Pen color: &nbsp;
                        <input type="color" value={this.state.color} onChange= {this.changeColour.bind(this)} />
                    </div>
                    <div className='pensize-container'>
                        Select Pen size: &nbsp;
                        <select value= {this.state.size}onChange= {this.changeSize.bind(this)}>
                            <option> 5 </option>
                            <option> 10 </option>
                            <option> 15 </option>
                            <option> 20 </option>
                        </select>
                    </div>
                </div>
                    <div className='board-container'>
                        <Board color= {this.state.color} size={this.state.size}> </Board>
                    </div>
                </div>
            )
    }
}

export default Container 