import React, {useState} from "react";

function Counter() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const handleAddCounter1 = () => {
        setCounter1(counter1 + 1);
    }

    const handleAddCounter2 = () => {
        setCounter2(counter2 + 1);
    }


    return (
        <div>
            <div>
                <h1>Count: {counter1}</h1>
                <button onClick={handleAddCounter1}>Add 1</button>
            </div>
            <div>
                <h1>Count: {counter2}</h1>
                <button onClick={handleAddCounter2}>Add 2</button>
            </div>
        </div>
    );
}

export default Counter;