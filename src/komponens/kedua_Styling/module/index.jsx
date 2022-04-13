import React from 'react';
import Style from './myname.module.css';

 export default class Module extends React.Component{
    render(){
        return(
            <div>
                <button className={Style.btn+''+ Style.primary}>Module Css</button>
            </div>
        )
    }
}