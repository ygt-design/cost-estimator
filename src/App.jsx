import { createSignal } from "solid-js";
import ChoiceCard from "./components/Choice";

function App() {
  const [points, setPoints] = createSignal(0);
  const [prevPoints, setPrevPoints] = createSignal(0); // New state variable to store previous points
  const [selectedOptions, setSelectedOptions] = createSignal([]);
  const [step, setStep] = createSignal(1);
  const [showErrorMessage, setShowErrorMessage] = createSignal(false);

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
    if (selectedOptions().length === 0 && step() !== 3) {
      // Show error message if no option is selected (except in the final step)
      setShowErrorMessage(true);
    } else {
      const totalPoints = selectedOptions().reduce((sum, option) => sum + option, 0);
      setPrevPoints(points()); // Store previous points before proceeding to the next step
      setPoints((prevPoints) => prevPoints + totalPoints);
      setSelectedOptions([]);
      setStep((prevStep) => prevStep + 1);
      setShowErrorMessage(false);
    }
  };

  const handleReset = () => {
    setPoints(0);
    setPrevPoints(0); // Reset previous points
    setSelectedOptions([]);
    setStep(1);
    setShowErrorMessage(false);
  };

  const handleGoBack = () => {
    setSelectedOptions([]);
    setPoints(prevPoints()); // Set points to previous points
    setPrevPoints(0); // Reset previous points
    setStep((prevStep) => prevStep - 1);
    setShowErrorMessage(false);
  };

  return (
    <div class="container">
      {step() === 1 && (
        <div>
          <p>Current Points: {points()}</p>
          <ChoiceCard
            value={0} // Add the option for 0 points
            selectedOptions={selectedOptions}
            handleOptionClick={handleOptionClick}
          />
          <ChoiceCard
            value={1}
            selectedOptions={selectedOptions}
            handleOptionClick={handleOptionClick}
          />
          <ChoiceCard
            value={2}
            selectedOptions={selectedOptions}
            handleOptionClick={handleOptionClick}
          />
          {showErrorMessage() && <p>Please choose an option to continue.</p>}
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      )}

      {step() === 2 && (
        <div>
          <p>Current Points: {points()}</p>
          <ChoiceCard
            value={0} // Add the option for 0 points
            selectedOptions={selectedOptions}
            handleOptionClick={handleOptionClick}
          />
          <ChoiceCard
            value={3}
            selectedOptions={selectedOptions}
            handleOptionClick={handleOptionClick}
          />
          <ChoiceCard
            value={4}
            selectedOptions={selectedOptions}
            handleOptionClick={handleOptionClick}
          />
          {showErrorMessage() && <p>Please choose an option to continue.</p>}
          <button onClick={handleConfirm}>Confirm</button>
          {step() > 1 && <button onClick={handleGoBack}>Go Back</button>}
        </div>
      )}

      {step() === 3 && (
        <div>
          <p>Current Points: {points()}</p>
          <ChoiceCard
            value={0} // Add the option for 0 points
            selectedOptions={selectedOptions}
            handleOptionClick={handleOptionClick}
          />
          <ChoiceCard
            value={3}
            selectedOptions={selectedOptions}
            handleOptionClick={handleOptionClick}
          />
          <ChoiceCard
            value={4}
            selectedOptions={selectedOptions}
            handleOptionClick={handleOptionClick}
          />
          {showErrorMessage() && <p>Please choose an option to continue.</p>}
          <button onClick={handleConfirm}>Confirm</button>
          {step() > 1 && <button onClick={handleGoBack}>Go Back</button>}
        </div>
      )}

      {step() === 4 && (
        <div>
          <p>Current Points: {points()}</p>
          <ChoiceCard
            value={0} // Add the option for 0 points
            selectedOptions={selectedOptions}
            handleOptionClick={handleOptionClick}
          />
          <ChoiceCard
            value={3}
            selectedOptions={selectedOptions}
            handleOptionClick={handleOptionClick}
          />
          <ChoiceCard
            value={4}
            selectedOptions={selectedOptions}
            handleOptionClick={handleOptionClick}
          />
          {showErrorMessage() && <p>Please choose an option to continue.</p>}
          <button onClick={handleConfirm}>Confirm</button>
          {step() > 1 && <button onClick={handleGoBack}>Go Back</button>}
        </div>
      )}

      {step() === 5 && (
        <div>
          <p>Final Points: {points()}</p>
          <button onClick={handleReset}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default App;
