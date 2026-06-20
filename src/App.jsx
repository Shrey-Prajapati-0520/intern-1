import { useEffect, useState } from 'react'
import './App.css'

const evaluateExpression = (expression) => Function(`return (${expression})`)()

function App() {
  const [value, setValue] = useState('')

  const handlebuttonclick = (nextValue) => {
    if (nextValue === 'AC') {
      setValue('')
      return
    }

    if (nextValue === 'DE') {
      setValue((currentValue) => currentValue.slice(0, -1))
      return
    }

    if (nextValue === '=') {
      try {
        setValue(evaluateExpression(value).toString())
      } catch {
        setValue('Error')
      }
      return
    }

    setValue((currentValue) => currentValue + nextValue)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key

      if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        setValue((currentValue) => currentValue + key)
      } else if (key === 'Enter') {
        try {
          setValue((currentValue) => evaluateExpression(currentValue).toString())
        } catch {
          setValue('Error')
        }
      } else if (key === 'Backspace') {
        setValue((currentValue) => currentValue.slice(0, -1))
      } else if (key === 'Escape') {
        setValue('')
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  
  return (
      <div className="container">
          <div className="calculator">
            <form>
              <div className="display">
                <input type="text" value={value} readOnly />
              </div>
              <div>
                <input type="button" value="AC" onClick={() => handlebuttonclick('AC')} />
                <input type="button" value="DE" onClick={() => handlebuttonclick('DE')} />
                <input type="button" value="." onClick={() => handlebuttonclick('.')} />
                <input type="button" value="/" onClick={() => handlebuttonclick('/')} />
              </div>
              <div>
                <input type="button" value="7" onClick={() => handlebuttonclick('7')} />
                <input type="button" value="8" onClick={() => handlebuttonclick('8')} />
                <input type="button" value="9" onClick={() => handlebuttonclick('9')} />
                <input type="button" value="*" onClick={() => handlebuttonclick('*')} />
              </div>
              <div>
                <input type="button" value="4" onClick={() => handlebuttonclick('4')} />
                <input type="button" value="5" onClick={() => handlebuttonclick('5')} />
                <input type="button" value="6" onClick={() => handlebuttonclick('6')} />
                <input type="button" value="+" onClick={() => handlebuttonclick('+')} />
              </div>
              <div>
                <input type="button" value="1" onClick={() => handlebuttonclick('1')} />
                <input type="button" value="2" onClick={() => handlebuttonclick('2')} />
                <input type="button" value="3" onClick={() => handlebuttonclick('3')} />
                <input type="button" value="-" onClick={() => handlebuttonclick('-')} />
              </div>
              <div>
                <input type="button" value="00" onClick={() => handlebuttonclick('00')} />
                <input type="button" value="0" onClick={() => handlebuttonclick('0')} />
                <input type="button" className="equal" value="=" onClick={() => handlebuttonclick('=')} />
              </div>
            </form>
          </div>
      </div>
  )
  }



export default App
