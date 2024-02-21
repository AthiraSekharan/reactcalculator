import './App.css'
import { Button, Container } from 'react-bootstrap'
import React, { useState } from 'react';
function App() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };
  return (
    <>
<div  style={{  }} className='clas'>
     <div style={{ width: '98%', height: '100vh' }} className='container align-items-center justify-content-center d-flex' >
          <div  className=' class'>
            <div id="calculator">
            <h2>Simple Calculator</h2>
    
              <input
                className="display"
                type="text"
                value={display}
                readOnly
              /><br/><hr />
              <div className="buttons">
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button className='buttonbtn' onClick={() => handleClick('/')}>/</button><br />
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button  className='buttonbtn'onClick={() => handleClick('*')}>*</button><br />
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button  className='buttonbtn'onClick={() => handleClick('-')}>-</button><br />
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('.')} >.</button>
                <button onClick={() => handleClick('+')} >+</button>
                <button className='buttonbtn' onClick={() => handleClick('%')}>%</button>
    
              </div>
              <button className="clear"  onClick={clearDisplay}>Clear</button>
              <button className='buttonbtn' onClick={() => handleClick('(')}  >(</button>
              <button className='buttonbtn' onClick={() => handleClick(')')}  >)</button>
              <button className='buttonbtn' onClick={calculateResult}>=</button>
    
            </div>
    
          </div>
     </div>  
  
</div>                </>
  )
}

export default App
