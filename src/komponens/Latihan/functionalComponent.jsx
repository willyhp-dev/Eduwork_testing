import { useState } from "react";

const FunctionalComponent = (props)=> {
    const [value, setValue] = useState(0);
    const handleplus = () => {
        setValue(value + 1)
    }
    const handleminus = () => {
        if(value > 0){
            setValue(value - 1)
        } 
    }
    return (
    <div>
        <h1>Hello Functional</h1>
        <h2>{props.nama}</h2>
        <button onClick={handleminus}>-</button>
        <span>{''} {value} {''}</span>
        <button onClick={handleplus}>+</button>
    </div>
    )
    
}
export default FunctionalComponent;