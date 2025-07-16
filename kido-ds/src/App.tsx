import { useState } from 'react';
import './App.css';
import { Checkbox, CheckboxType } from './checkbox/Checkbox';
import reactLogo from './assets/react.svg';

function App() {
  const [checkboxType1, setCheckboxType1] = useState<CheckboxType>(CheckboxType.unchecked);
  const [checkboxType2, setCheckboxType2] = useState<CheckboxType>(CheckboxType.unchecked);

  const handleCheckboxChange1 = (newState: CheckboxType) => {
    console.log("Checkbox 1 changed to:", newState);
    setCheckboxType1(newState);
  };

  const handleCheckboxChange2 = (newState: CheckboxType) => {
    console.log("Checkbox 2 changed to:", newState);
    setCheckboxType2(newState);
  };

  return (
    <>
      <Checkbox
        type={checkboxType1}
        onChange={handleCheckboxChange1}
        showLabel={true}
        labelText="Enable Feature"
        showCount={true}
        count={"2"}
        showDescription={true}
        description="This toggles the feature on or off."
        showIcon={true}
        icon={<img src={reactLogo} alt="React Logo" width={16} height={16} />}
      />
      <br /><br />
      <Checkbox
        type={checkboxType2}
        onChange={handleCheckboxChange2}
        showLabel={true}
        labelText="Label example"
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