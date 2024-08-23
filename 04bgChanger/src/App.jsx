import { useState } from "react";



function App() {
  
  const [color, setColor] = useState('olive')



  return (
    <>
    <div className='w-full h-screen p-4 text-white' style={{backgroundColor: color}}>
      <h1>Background color changer App</h1>
      <p>Background Color: {color}</p>
      
    <button onClick={() => setColor('red')} className="bg-red-600 px-4 rounded-sm m-2">Red</button>
    <button onClick={() => setColor('blue')} className="bg-blue-600 px-4 rounded-sm m-2">Blue</button>
    <button onClick={() => setColor('Green')}className="bg-green-600 px-4 rounded-sm m-2">Green</button>
    </div>
    
    
    
    
    </>
  )
}

export default App
