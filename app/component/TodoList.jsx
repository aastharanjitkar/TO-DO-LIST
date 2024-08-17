import React from "react";
import TodoItems from "./TodoItems";

const TodoList = ({ todos, onRemove, onToggleComplete, onEdit = () => {} }) => {
  return (
    <ul className="space-y-2">
      {todos.map((todo, index) => (
        <TodoItems
          key={index}
          todo={todo}
          onRemove={() => onRemove(index)}
          onToggleComplete={() => onToggleComplete(index)}
          onEdit={(newText) => onEdit(index, newText)} // Ensure this is correctly handled
        />
      ))}
    </ul>
  );
};

export default TodoList;
