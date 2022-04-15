import React from 'react';

export default class Title extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:'lifecycle'
        }
        console.log('CONSTRUCTOR');
    }
    static getDerivedStateFromProps(props,state){
        console.log('get derived state from props');
        console.log('props:',props);
        console.log('state:',state);
        console.groupEnd();
        return null;
    }
    shouldComponentUpdate(nextProps,nextState){
        console.group('SHOULD UPDATE?');
        console.log('NextProps',nextProps);
        console.log('NextProps',nextState);
        console.log('this props:', this.props);
        console.log('this state:',this.state);
        console.groupEnd();
        return true;
    }
    render(){
        return(
            <div>
                <h1>{this.state.title} {this.props.name} :{this.props.count}</h1>
            </div>
        )
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.group('get snapshot before Update');
        console.log('prevProps', prevProps);
        console.log('prevState',prevState);
        console.log('this props:', this.props);
        console.log('this state:', this.state);

    }
    componentDidMount(){
        console.log('DID MOUNT');
    }
    componentDidUpdate(){
        console.log('DID UPDATE');
    }
    componentWillUnmount(){
        console.log('WILL MOUNT');
    }

}