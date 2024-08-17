"use client";
import React, { useState } from "react";

const Addlist = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      onAdd(newTodo);
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="flex-1 border rounded p-2"
        placeholder="Add your todo"
      />
      <button
        type="submit"
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Add
      </button>
    </form>
  );
};

export default Addlist;
