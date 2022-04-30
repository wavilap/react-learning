import { useState } from 'react'
import Counter from '../components/Counter'

function App() {
  const [inputValue, setInputValue] = useState(0);

  const handleChange = (event) => {
    // console.log('type number: ', typeof event.target.value);
    setInputValue(Number(event.target.value));
  };
  
  return (
    <>
      <div className="App">
        <input type="number" value={inputValue} onChange={handleChange} />

        <Counter initialCount={inputValue} maxNumber={20} />
      </div>
    </>
  )
}

export default App
