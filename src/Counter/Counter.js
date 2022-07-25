import { useState } from "react";

const Counter = () =>{
    const[count, seCount] = useState(0)

    const decremen = () =>{
        seCount(count -1)
    }
     
    const increment = () =>{
        seCount(count +1)
    }
    return(
        <div>
            <button onClick={decremen}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter