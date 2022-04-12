import React from 'react';
import Baris_kedua from './Latihan/baris_kedua';
import Komponen from './Latihan/komponen';

class Komponens extends React.Component{
    render(){
        return(
            <div>
                <Komponen />
                <Baris_kedua/>
            </div>
        )
    }
}
export default Komponens;