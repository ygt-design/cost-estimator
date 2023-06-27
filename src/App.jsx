import { createSignal } from 'solid-js';


function App() {
  const [points, setPoints] = createSignal(0);
  const [selectedOptions, setSelectedOptions] = createSignal([]);
  const [step, setStep] = createSignal(1);

  const handleOptionClick = (value) => {
    setSelectedOptions((prevOptions) => {
      const index = prevOptions.indexOf(value);
      if (index !== -1) {
        // If the option is already selected, deselect it
        return prevOptions.filter((option) => option !== value);
      } else {
        // If the option is not selected, select it
        return [...prevOptions, value];
      }
    });
  };

  const handleConfirm = () => {
    const totalPoints = selectedOptions().reduce((sum, option) => sum + option, 0);
    setPoints((prevPoints) => prevPoints + totalPoints);
    setSelectedOptions([]);
    setStep((prevStep) => prevStep + 1);
  };

  const handleReset = () => {
    setPoints(0);
    setSelectedOptions([]);
    setStep(1);
  };

  return (
    <div>
      {step() === 1 && (
        <div>
          <p>Current Points: {points()}</p>
          <button
            onClick={() => handleOptionClick(1)}
            classList={{ selected: selectedOptions().includes(1) }}
          >
            Choose 1
          </button>
          <button
            onClick={() => handleOptionClick(2)}
            classList={{ selected: selectedOptions().includes(2) }}
          >
            Choose 2
          </button>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      )}

      {step() === 2 && (
        <div>
          <p>Current Points: {points()}</p>
          <button
            onClick={() => handleOptionClick(3)}
            classList={{ selected: selectedOptions().includes(3) }}
          >
            Choose 3
          </button>
          <button
            onClick={() => handleOptionClick(4)}
            classList={{ selected: selectedOptions().includes(4) }}
          >
            Choose 4
          </button>
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
