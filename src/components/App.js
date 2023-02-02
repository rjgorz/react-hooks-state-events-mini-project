import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDelete(id) {
    const updatedTasks = tasks.filter(task => {
      if(task.text === id) return false;

      return true;
    });
    setTasks(updatedTasks);
  }

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const itemsToRender = tasks.filter(task => {
    if(selectedCategory === "All") return true;
    return task.category === selectedCategory;
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={itemsToRender} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
