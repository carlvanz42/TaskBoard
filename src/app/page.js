'use client';

import Image from "next/image";
import { useState } from "react";
import Tasklist from "@/components/Tasklist";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask,setNewTask] = useState('');

  const addTask = () => {
    console.log("Before Add " + tasks);
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    console.log("After Add ", updatedTasks);
    setNewTask('');
  }

  const deleteTask = () =>{
    console.log("Before Deleted " + tasks)
    const updatedTasks = [""];
    setTasks(updatedTasks)
    console.log("After Deleted ", updatedTasks)
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Task Board</h1>

      <div className="p-4 flex gap-2 nb-4">
        <input
          className="border p-2 flex-1 rounded"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        
        <button
          className="bg-blue-500 text-white p-4 rounded"
          onClick={addTask}
        >
          Add
        </button>
        <button
          className="border p-4 rounded bg-blue-500 text-white"
          onClick={deleteTask}
        >
          Clear
        </button>
      </div>
      <Tasklist tasks={tasks}/>
    </main>
  );
}
