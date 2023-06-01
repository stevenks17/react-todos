import React, { useState } from "react";
import { NewTodoFormProps } from "../types";

export function NewTodoForm({ onSubmit }: NewTodoFormProps) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex flex-col gap-2 text w-72">
        <label htmlFor="item"> New Item</label>
        <input
          className="border border-gray-400 rounded px-2 py-1 outline-none focus:border-blue-500"
          placeholder="Enter a new task..."
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="text bg-green-500 border-green-500 px-2 py-1 mt-2 rounded cursor-pointer outline-none focus:bg-green-600 hover:bg-green-600 w-full">
        Add
      </button>
    </form>
  );
}
