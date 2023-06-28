export default function ChoiceCard({ value, selectedOptions, handleOptionClick, answer}) {
    return (
        <div>
            <button
            onClick={() => handleOptionClick(value)}
            classList={{ selected: selectedOptions().includes(value) }}
            >
            Choose {value}
            {answer}
            </button>
        </div>
    );
  }
  