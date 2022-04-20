import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

export default function Counter(){
    let {count} = useSelector(state =>state.counter)
    const dispatch = useDispatch();

    return(
        <div>
            <Button onClick={()=> dispatch({type :'DEC', value :1})}> - </Button>
            {' '}<span>{count} </span>{' '}
           <Button onClick={()=> dispatch({type :'INC', value :1})}> + </Button>
           {
               console.log({count})
           }
        </div>
        
    )
}