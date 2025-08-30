
import { useState , useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


  // making time readable 
function App() {
  const TodoKey = "index"
  const [EditId, setEditId] = useState(null)
  const [Task, setTask] = useState("")
  const [Tasks, setTasks] = useState(()=>{
    const rawTasks = localStorage.getItem(TodoKey);
    if(!rawTasks) return [];
    return JSON.parse(rawTasks);
  })
  

  function formatDate(date) {
  return date.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

   //Adding task to local storage
   useEffect(() => {
  localStorage.setItem(TodoKey, JSON.stringify(Tasks));
}, [Tasks]);

    // localStorage.setItem( TodoKey, JSON.stringify(Tasks))

  const handleChange = (e) => {
    setTask(e.target.value)

  }

  const handleAdd = (e) => {
   e.preventDefault();  // to stop page reload
  if (Task.trim() === "") return;

  if (EditId !== null) {
    // we are editing an existing task
    const updatedTasks = Tasks.map((t) =>
      t.id === EditId ? { ...t, text: Task } : t
    );
    setTasks(updatedTasks);
    setEditId(null); // reset edit mode
  } else {
    // normal add
    const NewTask = {
      id: Date.now(),
      text: Task,
      createdAt: new Date().toISOString(),
      completed: false,
    };
    setTasks([...Tasks, NewTask]);
  }

  setTask(""); // clear input box

  }
   const handelCheckbox = (id) => {
  
    // go through all the Tasks
    const updated = Tasks.map(task => {
      if(task.id === id){
        //if this is our task we clicked then we change the completed
        return {...task, completed: !task.completed};
      }
      return task; // otherwise leaving it as it is 
    })

    setTasks(updated); // update state with new list
    console.log("Checkbox");
    // console.log(e.completed);

  }

  const handleEdit = (id,text) => {
   setTask(text)
   setEditId(id)
  return console.log("Edit")
    
  }
  const handleDelete = (id) => {
    console.log(Tasks)
    console.log(id)
    const updatedTasks = Tasks.filter((t) => t.id !== id)
    setTasks(updatedTasks)
  }



  return (
    <>
      <div className=" flex flex-col relative container">
        <Navbar />
        {/* Write and add tasks SEction */}
        <div className="flex justify-center">
            {/* Input field */}
            <form onSubmit={handleAdd} className="flex  items-center justify-center gap-3 p-4 -md mx-1 sm:mx-0 sm:w-[70vw]">
            <input onChange={handleChange}
              type="text" value={Task}
              placeholder="Enter your task"
              className="flex-1 px-4 py-2 rounded-full border border-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />

            {/* Add button */}
            <button className="px-5 py-2 bg-white text-black border-2 border-black font-semibold rounded-full hover:bg-black hover:text-white transition">
              Add
            </button>
            </form>
          
        </div>


        {/* All Tasks will be added here */}
        <div className='flex flex-col items-center m-4 sm:m-8 p-4 border-2 border-black bg-slate-100 rounded-xl hover:shadow-lg'>
          {Tasks.length==0 && <div className='text-gray-300 font-serif text-center'> No Tasks to Display </div>}
          
          {Tasks.map((e, index) => (

          <div key={index} className={`${e.completed ? "bg-gray-200" : ""} EachTask bg-white w-full sm:w-[80%] px-4 py-3  m-2 flex flex-col sm:flex-row justify-between items-center  gap-2 border-2 rounded-xl break-normal transition-all duration-300
               hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]`}>

            <label className="flex items-center gap-3 cursor-pointer select-none w-full sm:w-auto">
              <input  
                type="checkbox" checked = {e.completed}
                onChange={()=> handelCheckbox(e.id)}className="w-5 h-5 accent-black bg-white border-2 border-black cursor-pointer rounded-x"
              />
              <span className= "text-white text-lg "></span>
            </label>
             
           <span className = {`${e.completed ? "line-through text-gray-400" : ""} max-w-full break-words`}>
            {e.text}
           </span>
           
            <span className="ml-2 px-2 py-0.5 rounded-lg bg-gray-200 text-gray-500 text-xs italic font-serif"> Added on {formatDate(new Date(e.createdAt))}</span>
              


            <div className='flex gap-2  justify-center sm:justify-end w-full  flex-wrap'>
              
              <button onClick={()=>handleEdit(e.id , e.text)} className="px-4 py-2  bg-white text-black border-2 border-black font-semibold rounded-full hover:bg-black hover:text-white transition flex-1 max-w-32  ">
                Edit
              </button>
              <button onClick={()=>handleDelete(e.id)} className="px-4 py-2 bg-white text-black border-2 border-black font-semibold rounded-full hover:bg-black hover:text-white transition flex-1 max-w-32">
                Delete
              </button>
              
            </div>
          </div>
           ))}
        </div>
      
      </div>
    
    </>
  )
}

export default App
