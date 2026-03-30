import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [task, setTask] = useState([]);


  const submitHandler = (e) => {
    e.preventDefault();
    setTitle('');
    setMessage('');
    const copyTask = [...task];
    copyTask.push({ title, message });
    setTask(copyTask);
  }

  const deleteHandler = (index) => {
    const copyTask = [...task];
    copyTask.splice(index, 1);
    setTask(copyTask);
  }


  return (
    <div className="p-8 flex flex-col gap-8 h-screen w-full mx-auto">
      <h1 className="font-bold text-5xl">Add Notes</h1>
      <div className="lg:flex w-full gap-8">
        <form onSubmit={(e) => {
          submitHandler(e);
        }}
          className="flex flex-col gap-4 lg:w-1/2 h-fit">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}

            className="border-2 border-gray-500 outline-none py-2 px-4 rounded h-15"
            type="text"
            placeholder="Enter your name"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border-2 border-gray-500 outline-none py-2 px-4 rounded h-32 resize-none"
            placeholder="Enter your message">

          </textarea>
          <button
            onClick={submitHandler}
            className="bg-blue-500 active:scale-95 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
            type="button"
          >Add Task</button>
        </form>
        <div className="flex flex-col gap-4 lg:w-1/2 lg:border-l-2 border-gray-300 h-full lg:pl-8">
          <h1 className="font-bold text-3xl"> Recent Tasks</h1>
          <div className="p-2 rounded h-150 flex flex-wrap gap-4 overflow-auto">
            {task.map(function (element, idx) {
              return (

                <div kay={idx} className=" h-70 w-60 rounded-2xl py-5 px-4 flex flex-col gap-6 justify-between bg-[url('https://www.bbassets.com/media/uploads/p/l/40347281_1-cubic-ruled-lines-sticky-note-pad-yellow-8-x-6-cm.jpg')] bg-center bg-no-repeat">
                  <div>
                    <h2 className='font-black text-xl leading-tight'>{element.title}</h2>
                    <p className='text-gray-600 font-semibold'>{element.message}</p>
                  </div>
                  <button 
                  onClick={() =>{
                    deleteHandler(idx)
                  }}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors duration-300  bottom-4 right-4">Delete</button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
