"use client";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const TodoItems = ({ todo, onToggleComplete, onEdit, onRemove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editedText.trim()) {
      onEdit(editedText);
    }
    setIsEditing(!isEditing);
  };

  const handleCheckboxChange = () => {
    onToggleComplete();
  };

  return (
    <li className="flex items-center justify-between p-4 bg-gray-100 border rounded-lg shadow-sm transition-transform transform hover:scale-105">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckboxChange}
          className="cursor-pointer accent-blue-900"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="border rounded p-1 w-full"
            onBlur={handleEdit}
            autoFocus
          />
        ) : (
          <span
            className={`text-lg ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={handleEdit}
          className="text-gray-500 hover:text-blue-500 transition-colors"
        >
          <FaRegEdit />
        </button>
        <button
          onClick={onRemove}
          className="text-gray-500 hover:text-red-500 transition-colors"
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </li>
  );
};

export default TodoItems;
