import React from 'react';
import './index.css';
import Inline from './inline';

class Styling extends React.Component{
    render(){
        return(
            <div>
                <Inline/>
                <button className=' btn btn-info'>Infoh</button>
            </div>
        )
    }
}
export default Styling;