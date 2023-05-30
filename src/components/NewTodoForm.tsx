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
      <div className="">
        <label htmlFor="item"> New Item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="">Add</button>
    </form>
  );
}
