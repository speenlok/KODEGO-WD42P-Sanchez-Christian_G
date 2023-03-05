import "./Content.css"
import { useState } from 'react';
// import Modal from './Modal';

const Content = () => {

    // const [toggle, setToggle] = useState(false)
    // const [toggle1, setToggle1] = useState(false)
    
    const [tasks, setTasks] = useState(

        [{
            id: 1,
            checked: false,
            taskName: 'Study and review Javascript DOM',
            remarks: 'Very Easy'
        },
        {
            id: 2,
            checked: false,
            taskName: 'Study React Router',
            remarks: 'A bit challenging but fun'
        },
        {
            id: 3,
            checked: false,
            taskName: 'Dissect Javascript Data Structure and Algorithm',
            remarks: 'It was challenging at first'
        }]
    );
    
        const [newTask, setNewTask] = useState('');
            // const [updateData, setUpdateData] = useState('');
        const [newTaskR, setNewTaskR] = useState('');

        const addTask = () => {
            if(newTask) {
                let num = tasks.length + 1;
                let newEntry = { id: num, taskName: newTask, checked: false, remarks: newTaskR}
                setTasks([...tasks, newEntry])
                setNewTask('')
                setNewTaskR('')
            }
        }

        const deleteTask = (id) => {
            let newTasks = tasks.filter(tasks => tasks.id !== id)
            setTasks(newTasks)
        }        
    return(
            <main>
                <div className="to-do-list">
                    <div className="div-title">
                        To Do List
                    </div>
                    <div className="div-list">
                        <input 
                            placeholder="New Task" 
                            className="new-task-input"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                        ></input>
                                                <input 
                            placeholder="Remarks" 
                            className="new-task-input"
                            value={newTaskR}
                            onChange={(e) => setNewTaskR(e.target.value)}
                        ></input>
                        <button 
                        onClick={addTask}
                        className="add-task"
                        >Add Task</button>
                        <div className="item-list">
                            <span className="item-name">
                            <div className="no-task">
                            {tasks && tasks.length ? '' : 'No task'}
                            </div>
                            {tasks && tasks
                                .map( (tasks, index) =>{
                                    return(
                                        <div>
                                            <div key={tasks.id} className="task-holder">
                                                <div className={tasks.checked ? 'task-done': ''}>
                                                    <span className="item-name2">{index + 1}</span>
                                                    <span className="item-name3">{tasks.taskName}</span> <br></br>
                                                    <span className="item-name4">{tasks.remarks}</span> 
                                                    <div className="delete-button-holder">
                                                        <button
                                                        onClick={() => deleteTask(tasks.id)}
                                                        className="delete-button"
                                                        >Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )})}
                            </span>
                        </div>
                        {/* <button className={`${toggle === true ? 'delete-button' : 'delete-button-hide'}`}>-</button> */}
                    </div>
                    {/* <button className="new-task" onClick={() => setToggle1(!toggle1)}>+ New Task</button>
                    {toggle1 === true ? <Modal toggle1={toggle1} setToggle1={setToggle1}/> : null} */}
                </div>
            </main>
            
    )}

export default Content;