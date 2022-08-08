import { useState } from "react";

const Form = ({ addTask }) => {

    // following code mainly borrowed from CN39 lecture slide deck

    // ------------ states --------------------- //
    const [userInput, setUserInput] = useState('');



    // ------------ update functions ----------------- //
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    };

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    };



    // ------------ main return ------------------- //

    return (
        <form onSubmit={handleSubmit}>

            <input value={userInput} type='text' onChange={handleChange} placeholder="Enter item ..."></input>

            <button>Submit</button>

        </form >

    );
};


export default Form;