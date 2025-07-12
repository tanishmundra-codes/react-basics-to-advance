import { useCallback, useEffect, useState, useRef } from 'react'


function App() {
  const [len, setLen] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");
  const passwordref = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (num) str += "0123456789"
    if (char) str += "!@#$%^&*~"

    for (let i = 0; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPass(pass)

  }, [len, num, char]);

  useEffect(() => {
    passwordgenerator()
  }, [len, num, char, passwordgenerator])

  const copy = useCallback(() => {
    passwordref.current?.select()
    window.navigator.clipboard.writeText(pass)
  },[pass])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8  text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
        <input type="text" value={pass} placeholder="Password" className='outline-none w-full py-1 px-3' readOnly  ref={passwordref} />

        <button onClick={copy} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-orange-500'>
          copy
        </button>
      </div>

      <div className='flex text-sm gap-x-2'>

        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={len}
            className='cursor-pointer'
            onChange={(e) => { setLen(e.target.value) }}
           
          />
          <label>Length: {len}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={num}
            id="numberInput"
            onChange={() => {
              setNum((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={char}
            id="characterInput"
            onChange={() => {
              setChar((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>

      </div>
    </div>
  )
}

export default App
