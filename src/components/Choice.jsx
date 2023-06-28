export default function ChoiceCard({ value, selectedOptions, handleOptionClick, showErrorMessage }) {
    return (
      <div>
        <button
          onClick={() => handleOptionClick(value)}
          classList={{ selected: selectedOptions().includes(value) }}
        >
          Choose {value}
        </button>
      </div>
    );
  }
  