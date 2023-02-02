import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formTask, setFormTask] = useState("");
  const [formCategory, setFormCategory] = useState("Code");
  
  const options = categories.map(category => {
    if (category !== "All")
      return <option key={category} value={category}>{category}</option>;

    return null;
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      text: formTask,
      category: formCategory,
    }
    onTaskFormSubmit(newTask);
  }

  function handleTaskFormChange(e) {
    setFormTask(e.target.value);
  }

  function handleCategoryFormChange(e) {
    setFormCategory(e.target.value);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTaskFormChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryFormChange}>
          {/* render <option> elements for each category here */}
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
