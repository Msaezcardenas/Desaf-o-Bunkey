import React, { Component } from 'react'
import { number } from '../redux/actions';
import { connect } from 'react-redux';




class Input extends Component {

    onClick = () => {
        const calculate = () => {
            let numPar = '';
            let numImpar = '';
            if(this.props.reducer.value % 2 === 0){
                numPar.push(this.props.reducer.value)
            }
            else {
                numImpar.push(this.props.reducer.value)
            }
        };
        calculate();
    }

    render () {
        return (
            <div>
                <input
                className= 'input'
                type='text'
                onChange= {(e) => this.props.getNumberValue(e.target.value)}
                />

                <button
                    onClick={this.onClick}>
                    Validar
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
        console.log(state)
    return {
        ...state
   };
};

const mapActionsToProps= (dispatch) => {
    return {
        getNumberValue: number(dispatch)
    };
};

export default connect (mapStateToProps,mapActionsToProps)(Input)