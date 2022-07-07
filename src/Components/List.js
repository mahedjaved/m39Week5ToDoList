const List = ({ todolist, handleTaskToggleClick, handleClearButton }) => {

    // ------------ main return ------------------- //
    return (
        <div>
            {/* print out the list, the use of striking out checked task I borrowed from :: https://www.educative.io/blog/react-hooks-tutorial-todo-list*/}
            {
                todolist.map((item) =>
                    <div className={item.isComplete ? "checkedTask" : "uncheckedTask"} id={item.id} key={item.id + item.task} onClick={handleTaskToggleClick}>{item.task}</div>
                )
            }

            {/* button for deleting tasks */}
            < button className="clearButton" onClick={handleClearButton}>Clear Completed</button>
        </div >
    );

};


export default List;