
import { Fragment, useState } from 'react';

// eslint-disable-next-line react/prop-types
export function TodoInput({ ontodoAdd }) {

    const [inputText, setInpuText] = useState("");

    const handleInput = (event) => {
        const value = event.target.value;
        setInpuText(value);
    };

    const handleClick = () => {
        ontodoAdd(inputText);
        setInpuText('');
    }

    // const handleClick = () => {
    //     setTodos((prevTodos) =>{
    //         return  [...prevTodos, inputText]
    //     });
    //     console.log("clicked", todos);
    // };

    return (
        <Fragment>
            <div>
                <input value={inputText} onChange={handleInput}></input>
                <button onClick={handleClick}>add</button>
            </div>
        </Fragment>

    )
}