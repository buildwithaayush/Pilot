'use client'

import { useState } from "react"

export default function Todo(){
    const[text,setText] = useState("");
    const[todos, setTodos] = useState<string[]>([]);

    
    
    const handleEdit = ()=>{

    }

    const handleDelete = ()=>{

    }

   const handleClick = () =>{
        setTodos([...todos, text])
        setText("");

   }

   const abc = todos.map((t,index) =>  <>
   <div className="flex items-center gap-10">
    <div key={index}>
    {t}
     </div>
     <div>
    <button className="text-md border bg-white rounded-md text-black px-2 py-1 m-1" onClick={() =>alert("Edit button is clicked")}>Edit</button>
     <button className="text-md border bg-white rounded-md text-black px-2 py-1 m-1" onClick={() => alert("delete button is clicked")}>Delete</button>
  
     </div>
   </div>
   
    
   </>)
    return(<>
        <input className="border p-6 text-xl rounded-md m-2 text-lg"type="text" placeholder="Enter your todo here" 
    value={text} onChange={(e) => setText(e.target.value)}/>
    <button className="border p-2 hover:bg-slate-100 m-2 rounded-md" onClick={handleClick} >Add todo</button>
    <div className="text-3xl font-bold m-4">{abc}</div> 
     
    
    
    </>)
}   