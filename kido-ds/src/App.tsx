import { useState } from 'react';
import './App.css';
import { Checkbox, CheckboxType } from './checkbox/Checkbox';
// import reactLogo from './assets/react.svg';
import ReactLogo from './assets/react.svg?react';

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
        icon={<ReactLogo />}
      />
      <br /><br />
      <Checkbox
        type={checkboxType2}
        onChange={handleCheckboxChange2}
        showLabel={true}
        labelText="Label example"
        showCount={false}
        showDescription={true}
        description="Bla bla bla bla bla bla bla bla."
        showIcon={true}
        icon={<ReactLogo />}
      />
    </>
  );
}

export default App;