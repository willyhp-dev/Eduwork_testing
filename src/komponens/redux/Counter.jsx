import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

export default function Counter(){
    let {count} = useSelector(state =>state.counter)
    const dispatch = useDispatch();

    return(
        <div>
            <Button onClick={()=> console.log(dispatch({type :'DEC', count :1})) }> - </Button>
            {' '}<span>{count} </span>{' '}
           <Button onClick={()=> console.log(dispatch({type :'INC', count :1})) }> + </Button>
           {
               console.log({count})
               
           }
        </div>
        
    )
}