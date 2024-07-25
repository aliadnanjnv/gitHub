import { useState } from "react";
function App() {

    let [count, setCount] = useState(0);

    const addNumber = () => {

        if (count < 20) {
            count = count + 1;
            setCount(count);
        }

    }

    const lessNumber = () => {
        if (count > 0) {
            count = count - 1;
            setCount(count);
        }
    }

    const Set = () => {
        count = 0
        setCount(count);
    }

    return (
        <>
            <h1>this is a counter</h1>
            <p>{count}</p>
            <button onClick={addNumber}>+</button>
            <button onClick={lessNumber}>-</button>
            <button onClick={Set}>SET</button>

        </>
    )
}

export default App;
