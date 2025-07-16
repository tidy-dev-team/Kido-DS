import { useState } from 'react';
import './App.css';
import { Checkbox, CheckboxState } from './checkbox/Checkbox';
import reactLogo from './assets/react.svg'

function App() {
  const [checkboxState, setCheckboxState] = useState<CheckboxState>(
    CheckboxState.Unchecked
  );

  const handleCheckboxChange = (newState: CheckboxState) => {
    console.log("Checkbox changed to:", newState);
    setCheckboxState(newState);
  };

  return (
    <>
    <Checkbox
      state={checkboxState}
      onChange={handleCheckboxChange}
      showLabel={true}
      labelText="Enable Feature"
      showCount={true}
      count={"2"}
      showDescription={true}
      description="This toggles the feature on or off."
      showIcon={true}
      icon={<img src={reactLogo} alt="React Logo" width={16} height={16} />}
    />
    <br/><br/>
    <Checkbox
      state={checkboxState}
      onChange={handleCheckboxChange}
      showLabel={true}
      labelText="Enable Feature"
      showCount={true}
      count={"4"}
      showDescription={true}
      description="This toggles the feature on or off."
      showIcon={true}
      icon={<img src={reactLogo} alt="React Logo" width={16} height={16} />}
    />
    </>
  );
}

export default App;