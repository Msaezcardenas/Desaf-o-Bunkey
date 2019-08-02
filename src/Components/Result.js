import React, {Component} from 'react'
import {connect} from 'react-redux'

class Result extends Component {

    render () {
        return(
            <div>
                Resultado: <p>{this.props.reducer.outcome}</p>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(Result);
