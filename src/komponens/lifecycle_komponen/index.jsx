import React from 'react';
import Title from './title';


export default class LifeCycler extends React.Component{
    state = {
        name: "Components",
        view:true,
        count:0
    }
    render(){
        console.log('RENDER')
        return(
            <div>
                {
                    this.state.view && <Title name ={this.state.name} count ={this.state.count}  />
                }
                <button onClick={() => this.setState({view: false})}>Copot</button>
                <button onClick={() => this.setState({name: 'Class'})}>Update</button>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Count</button>
            </div>
        )
    }
}