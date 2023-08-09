import React, { useState } from "react";

const ToggleableInput = ({ inputNames }) => {
  const [expanded, setExpanded] = useState(false);
  const initialInputsState = Object.fromEntries(
    inputNames.map((name) => [name, false])
  );
  const [inputs, setInputs] = useState(initialInputsState);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleInput = (inputName) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [inputName]: !prevInputs[inputName],
    }));
  };

  return (
    <div>
      <button onClick={toggleExpand}>{expanded ? "Collapse" : "Expand"}</button>
      {expanded && (
        <div>
          {inputNames.map((name) => (
            <label key={name}>
              <input
                type="checkbox"
                checked={inputs[name]}
                onChange={() => toggleInput(name)}
              />
              {name}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToggleableInput;
