"use client";
import React, { useState } from "react";
import Addlist from "./component/Addlist";
import TodoList from "./component/TodoList";

const Page = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    const updatedTodos = [{ text: newTodo, completed: false }, ...todos];
    setTodos(
      updatedTodos
        .sort((a, b) => a.text.localeCompare(b.text))
        .sort((a, b) => a.completed - b.completed)
    );
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos.sort((a, b) => a.text.localeCompare(b.text)));
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(
      updatedTodos
        .sort((a, b) => a.text.localeCompare(b.text))
        .sort((a, b) => a.completed - b.completed)
    );
  };

  const handleEditTodo = (index, newText) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo
    );
    setTodos(
      updatedTodos
        .sort((a, b) => a.text.localeCompare(b.text))
        .sort((a, b) => a.completed - b.completed)
    );
  };

  const getDateAndDay = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();

    return {
      day,
      month,
      year,
      weekday: date.toLocaleDateString(undefined, { weekday: "long" }),
    };
  };

  const { day, month, year, weekday } = getDateAndDay();

  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center relative">
      <div
        className="relative p-6 bg-white shadow-lg rounded-lg flex flex-col"
        style={{ width: "600px" }}
      >
        <div className="sticky top-0 py-4 flex items-center justify-between px-4">
          <h1 className="text-5xl font-bold text-blue-900">To Do List</h1>
          <div className="text-gray-600 flex flex-col items-end">
            <div className="flex items-center space-x-1">
              <div className="text-6xl font-bold text-green-700 leading-none">
                {day}
              </div>
              <div className="flex flex-col items-start justify-center">
                <div className="text-sm font-bold text-gray-700">{month}</div>
                <div className="text-sm text-gray-700">{year}</div>
              </div>
            </div>
            <p className="text-xl font-bold text-gray-700 mt-2">{weekday}</p>
          </div>
        </div>

        <div
          className="flex-1 overflow-y-auto pr-4 w-[600]"
          style={{ maxHeight: "300px" }}
        >
          <Addlist onAdd={handleAddTodo} />
          <TodoList
            todos={todos}
            onRemove={handleRemoveTodo}
            onToggleComplete={handleToggleComplete}
            onEdit={handleEditTodo}
          />
        </div>
        <div className="py-4 text-gray-500">
          <div className="flex items-center space-x-4 justify-between px-4">
            <span>
              Completed: {todos.filter((todo) => todo.completed).length}
            </span>
            <span>Total Tasks: {todos.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
