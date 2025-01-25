import React, { useState, useEffect } from "react";
import { AddTaskForm, TaskList, FilterFooter } from "./../index";
import "./todoapp.css";
import { v4 as uuidv4 } from "uuid";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    if (filter === "all") {
      setFilteredTasks(tasks);
    } else if (filter === "completed") {
      setFilteredTasks(tasks.filter((task) => task.status));
    } else if (filter === "active") {
      setFilteredTasks(tasks.filter((task) => !task.status));
    }
  }, [filter, tasks]);

  useEffect(() => {
    let storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      storedTasks = JSON.parse(storedTasks);
    } else {
      storedTasks = [];
    }
    setTasks(storedTasks);
  }, []);

  const addTask = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        status: false,
      },
    ];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const deleteTask = (taskId) => {
    const newTaskList = tasks.filter((task) => task.id !== taskId);
    setTasks(newTaskList);
    localStorage.setItem("tasks", JSON.stringify(newTaskList));
  };

  const handleChangeStatus = (taskId) => {
    const newTaskList = tasks.map((task) =>
      task.id === taskId ? { ...task, status: !task.status } : task
    );
    setTasks(newTaskList);
    localStorage.setItem("tasks", JSON.stringify(newTaskList));
  };

  return (
    <div className="todoapp">
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} handleChangeStatus={handleChangeStatus} />
      <FilterFooter tasks={filteredTasks} changeFilter={setFilter} />
    </div>
  );
};

export default ToDoApp;
