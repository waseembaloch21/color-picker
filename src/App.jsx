import { useState } from 'react'
function App() {
  const [color, setColor] = useState('#000000')

  const handleColor = (event) => {
    setColor(event.target.value)
  }
  return (
    <div className='color-picker-container'>
      <h1>Color Picker</h1>

      <div className="display-color" style={{backgroundColor: color}}>
    <p>selected Color {color}</p>
      </div><br />

      <label id='label' >Choose a color</label><br />
      <input type="color" onChange={handleColor} value={color} />
    </div>
  )
}

export default App
