import { useCallback, useEffect, useRef, useState } from "react"


function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();
  
  const passwordRef = useRef(null);
  
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let num = "0123456789";
    let char = `!@#$%^&*()_+{}[]<>?`;

    if(numberAllowed) {str += num}
    if(charAllowed) {str += char}

    for (let i = 0; i < length; i++) {
      let charPossition = Math.floor((Math.random() * str.length));
      pass += str.charAt(charPossition);
    }
    setPassword(pass);
  

  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 8);

    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {passwordGenerator()},[length, numberAllowed, charAllowed, passwordGenerator]);

  

  return (
    <>
    <div className="bg-slate-600 p-5 text-orange-500">
      <h1 className='text-white text-3xl text-center py-2'>Password generator</h1>
      
      <div className="flex">
        <input 
        type="text" 
        placeholder="Password" 
        value={password} 
        readOnly 
        ref = {passwordRef}
        className="py-1 px-3 w-full rounded-l-md outline-none"/>

        <button 
        onClick={copyPassClipBoard}
        className=" outline-none px-3 py-1 bg-blue-500 rounded-r-md text-white shrink-0">Copy
        </button>
      </div>

      <div className="flex items-center justify-center gap-x-3 my-2 flex-wrap">
        <div className="flex items-center gap-x-1">
          <input 
          type="range" 
          min={8} 
          max={100} 
          value={length}
          className="cursor-pointer"
          onChange={(e) => {setLength(e.target.value)}}/>
          <label htmlFor="">Length: {length}</label>
        </div>

        <div className="flex gap-x-1 items-center">
          <input 
          type="checkbox"  
          id="numberInput" 
          defaultChecked = {numberAllowed}
          onClick={() => {setNumberAllowed((current) => !current)}}/>
          <label htmlFor="">Number</label>
        </div>

        <div className="flex gap-x-1 items-center">
          <input 
          type="checkbox"
          id="character" 
          defaultChecked = {charAllowed}
          onClick={() => {setCharAllowed((current) => !current)}}/>
          <label htmlFor="">Character</label>
        </div>
      </div>


    </div>
      
    </>
  )
}

export default App
