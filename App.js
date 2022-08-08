// runs the main app
import React, { useState } from "react";
import './App.css';
import List from './Components/List'
import Form from './Components/Form';


const App = () => {

    // ------------ variables --------------------- //

    // manually assigned 'id' and set "isComplete" for checking if the task is completed or not, this idea mainly borrowed from :  https://www.educative.io/blog/react-hooks-tutorial-todo-list*/
    const userList = [
        {
            "id": 1,
            "task": "Task 1",
            "isComplete": false,
        },
        {
            "id": 2,
            "task": "Task 2",
            "isComplete": false,
        }
    ];


    // ------------ states --------------------- //

    const [mainToDoList, setMainToDoList] = useState(userList);



    // ------------ update functions ----------------- //

    // this function will clear the checked tasks
    const handleClearButton = () => {
        setMainToDoList([...mainToDoList].filter(item => !item.isComplete));
    };

    // this function will strikethrough unchecked tasked once clicked
    const handleTaskToggleClick = (e) => {
        e.preventDefault();
        let taskClickedId = e.currentTarget.id;

        // console.log(taskClickedId);

        // get the task with the matched id and set is as complete if incomplete, or incomplete if complete, N.B if I dont use "...item", it basically wont return the actual item but a null ?? #TODO --> need 2 research this further

        let copy = [...mainToDoList];
        copy = copy.map(item => {
            return item.id === Number(taskClickedId) ? { ...item, isComplete: !item.isComplete } : { ...item }
        });
        setMainToDoList(copy);

    };

    // function to add tasks, mainly borrowed from CN39 lecture slides, the userInput is just a text
    const addTask2List = (userInput) => {
        let copy = [...mainToDoList];

        // adding an entry, TODO try with push as well
        copy = [...copy, { id: mainToDoList.length + 1, task: userInput, isComplete: false }];

        setMainToDoList(copy);
    };



    // ------------ main return ------------------- //
    return (
        <div>
            <h1 className="title">My Todo List</h1>
        
            <p>V1</p>

            <List todolist={mainToDoList} handleClearButton={handleClearButton} handleTaskToggleClick={handleTaskToggleClick} />

            <Form addTask={addTask2List} />
        </div>

    );

};

export default App;
