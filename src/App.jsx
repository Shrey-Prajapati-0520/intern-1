import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState("");
  return (
      <div className="container">
          <div className="calculator">
            <form action="">
              <div className="display">
                <input type="text" value={value} readOnly />
              </div>
              <div>
                <input type="button" value="AC" onClick={e => setValue("")} />
                <input type="button" value="DE" onClick={e => setValue(value.slice(0, -1))} />
                <input type="button" value="." onClick={e => setValue(value + ".")} />
                <input type="button" value="/" onClick={e => setValue(value + "/")} />
              </div>
              <div>
                <input type="button" value="7" onClick={e => setValue(value + "7")} />
                <input type="button" value="8" onClick={e => setValue(value + "8")} />
                <input type="button" value="9" onClick={e => setValue(value + "9")} />
                <input type="button" value="*" onClick={e => setValue(value + "*")} />
              </div>
              <div>
                <input type="button" value="4" onClick={e => setValue(value + "4")} />
                <input type="button" value="5" onClick={e => setValue(value + "5")} />
                <input type="button" value="6" onClick={e => setValue(value + "6")} />
                <input type="button" value="+" onClick={e => setValue(value + "+")} />
              </div>
              <div>
                <input type="button" value="1" onClick={e => setValue(value + "1")} />
                <input type="button" value="2" onClick={e => setValue(value + "2")} />
                <input type="button" value="3" onClick={e => setValue(value + "3")} />
                <input type="button" value="-" onClick={e => setValue(value + "-")} />
              </div>
              <div>
                <input type="button" value="00" onClick={e => setValue(value + "00")} />
                <input type="button" value="0" onClick={e => setValue(value + "0")} />
                <input type="button" className="equal" value="=" onClick={e => setValue(eval(value))} />
              </div>
            </form>
          </div>
      </div>   
  )
}

export default App
