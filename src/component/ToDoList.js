import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDoItem from "./ToDoItem";
import { Typography, CssBaseline, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

function ToDoList() {
  const classes = useStyles();
  const [date, setDate] = useState("");
  const [input, setInput] = useState("");
  const [tasks, setTask] = useState([]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAddTask = () => {
    if (input.trim() === "" || date.trim() === "") {
      return;
    }
    const newTask = {
      id: uuidv4(),
      taskName: input,
      deadLine: date,
      completed: false,
    };

    setTask([...tasks, newTask]);
    setInput("");
    setDate("");
    console.log(tasks);
  };

  const handleDeleteTask = (taskId) => {
    setTask(tasks.filter((task) => task.id !== taskId));
  };

  const handleToggleTask = (taskId) => {
    setTask(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteAllTasks = () => {
    setTask([]);
  };

  return (
    <div>
      <div className={classes.container}>
        <Typography variant="h4" className={classes.header}>
          To Do List
        </Typography>
        <div className={classes.inputdiv}>
          <input
            type="date"
            onChange={handleDateChange}
            value={date}
            placeholder="Enter A Deadline"
            className={classes.input}
          />

          <input
            type="text"
            onChange={handleInput}
            value={input}
            placeholder="Enter Your Task"
            className={classes.input}
          />

          <Button
            variant="contained"
            className={classes.button}
            onClick={handleAddTask}
          >
            Add Task
          </Button>
        </div>
      </div>
      <div>
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onDeleteTask={handleDeleteTask}
            onToggleTask={handleToggleTask}
          />
        ))}
      </div>
      {tasks.length > 0 && (
        <div className={classes.container}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleDeleteAllTasks}
          >
            Delete All
          </Button>
        </div>
      )}
    </div>
  );
}

export default ToDoList;
