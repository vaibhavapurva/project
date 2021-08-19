// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {addTaskData} from '../actions'
import {taskUser} from '../Service/api'; 

// import { useDispatch } from "react-redux";


const Task = ()=>{
const history = useHistory();
const dispatch = useDispatch();
// const dispatch = useDispatch();
const task = useSelector((state => state.task));
const onValueChange=(e)=>{
    dispatch(addTaskData({...task ,[e.target.name]: e.target.value}))
}

const addTask =()=>{
    dispatch(taskUser(task));
    history.push("/all")
}
return(
        <>
        <h1> Task</h1>
        <form onSubmit={() => addTask()} >
                Title:<input name="title" type="text" placeholder="Task Title " onChange={(e) => onValueChange(e)} />
                <br></br>
                Date:<input name="date" type="date"  onChange={(e) => onValueChange(e)} />
                <br></br>
                startTime:<input name="startTime" type="time" onChange={(e) => onValueChange(e)} />
                <br></br>
                endTime:<input name="endTime" type="time" onChange={(e) => onValueChange(e)} />
                <br></br>
                <button onClick={() => addTask()} variant="primary" type="submit" >Add User  </button>
        </form>
        </>
    )
}


export default Task;