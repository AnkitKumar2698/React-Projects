import React, {Component} from 'react';
class button extends Component{

    render(){
        return (
            <div className={`column-${this.props.cols}`}>
            <button className="calc-button" onClick={()=>this.props.action(this.props.symbol)}>{this.props.symbol}</button>
            </div>
        )
    }
}
export default button;