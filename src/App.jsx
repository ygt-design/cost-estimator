import { createSignal } from 'solid-js';

function App() {
  const [points, setPoints] = createSignal(0);
  const [tempValue, setTempValue] = createSignal(0);
  const [step, setStep] = createSignal(1);

  const handleOptionClick = (value) => {
    setTempValue(value);
  };

  const handleConfirm = () => {
    setPoints(points() + tempValue());
    setStep(step() + 1);
  };

  const handleReset = () => {
    setPoints(0);
    setStep(1);
  };

  return (
    <div>
      {step() === 1 && (
        <div>
          <p>Current Points: {points()}</p>
          <button onClick={() => handleOptionClick(1)}>Choose 1</button>
          <button onClick={() => handleOptionClick(2)}>Choose 2</button>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      )}

      {step() === 2 && (
        <div>
          <p>Current Points: {points()}</p>
          <button onClick={() => handleOptionClick(3)}>Choose 3</button>
          <button onClick={() => handleOptionClick(4)}>Choose 4</button>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      )}

      {step() === 3 && (
        <div>
          <p>Final Points: {points()}</p>
          <button onClick={handleReset}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default App;
