import React from 'react';
import Proptypes from 'prop-types';

class Komponen extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            value:0
        }
        this.handleplus = this.handleplus.bind(this);
        this.handleminus = this.handleminus.bind(this);
    }
    handleplus = () => {
        this.setState({ value :this.state.value +1})
    }
    handleminus = () => {
        if(this.state.value > 0){
            this.setState({ value :this.state.value -1})
        }  
    }
    render(){
        return(
            <div>
                <h1>Hello Word</h1>
                <h2>Hello sky</h2>
                <h3>{this.props.nama}</h3>
                <button onClick={this.handleminus}>-</button>
                <span>{''} {this.state.value} {''}</span>
                <button onClick={this.handleplus}>+</button>
            </div>
        )
    }
}
Komponen.proptoypes = {
    nama: Proptypes.string.IsRequired
}
export default Komponen;