import { useState } from 'react';
import './App.css';
import { Checkbox, CheckboxType } from './checkbox/Checkbox';
// import reactLogo from './assets/react.svg';
import ReactLogo from './assets/react.svg?react';
import { Button } from './button/Button';
import { Avatar } from './avatar/Avatar'

function App() {
  const [checkboxType1, setCheckboxType1] = useState<CheckboxType>(CheckboxType.unchecked);
  const [checkboxType2, setCheckboxType2] = useState<CheckboxType>(CheckboxType.checked);
  const [checkboxType3, setCheckboxType3] = useState<CheckboxType>(CheckboxType.indeterminate);
  const [checkboxType4, setCheckboxType4] = useState<CheckboxType>(CheckboxType.checked);

  const handleCheckboxChange1 = (newState: CheckboxType) => {
    console.log("Checkbox 1 changed to:", newState);
    setCheckboxType1(newState);
  };

  const handleCheckboxChange2 = (newState: CheckboxType) => {
    console.log("Checkbox 2 changed to:", newState);
    setCheckboxType2(newState);
  };

  const handleCheckboxChange3 = (newState: CheckboxType) => {
    console.log("Checkbox 3 changed to:", newState);
    setCheckboxType3(newState);
  };

  const handleCheckboxChange4 = (newState: CheckboxType) => {
    console.log("Checkbox 4 changed to:", newState);
    setCheckboxType4(newState);
  };

  return (
    <>
      <div className='flex gap-8 flex-wrap items-center justify-between w-2xl max-w-[60vw]'>
        <Avatar
          type="initials"
          initials="AA"
          shape="circle"
          size="40"
        />
        <Avatar
          type="initials"
          initials="AA"
          shape="rounded"
          size="52"
        />

        <Avatar
          type="picture"
          imageUrl="https://i.pravatar.cc/300"
          shape="circle"
          size="52"
        />
        <Avatar
          type="picture"
          imageUrl="https://i.pravatar.cc/300"
          shape="square"
          size="52"
          lowerBadge
        />


        <Button size="l" variant="contained">
          OK
        </Button>
        <Button size="m" variant="contained">
          OK
        </Button>
        <Button size="s" variant="contained">
          OK
        </Button>

        <Button size="l" variant="outlined" iconL={<ReactLogo />}>
          Large
        </Button>
        <Button size="m" variant="outlined" iconL={<ReactLogo />}>
          Medium
        </Button>
        <Button size="s" variant="outlined" iconL={<ReactLogo />}>
          Small
        </Button>


        <Button size="m" variant="ghost" iconL={<ReactLogo />}>
          Medium
        </Button>
        <Button size="m" variant="ghost" iconR={<ReactLogo />}>
          Click
        </Button>

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
        <Checkbox
          type={checkboxType4}
          onChange={handleCheckboxChange4}
        />
        <Checkbox
          type={checkboxType3}
          onChange={handleCheckboxChange3}
          showLabel={true}
          labelText="Checkbox"
        />

        <Avatar
          type="initials"
          initials="JS"
          shape="rounded"
          size="24"
        />
        <Avatar
          type="initials"
          initials="JS"
          shape="rounded"
          size="32"
        />
        <Avatar
          type="initials"
          initials="JS"
          shape="rounded"
          size="40"
        />
        <Avatar
          type="initials"
          initials="JS"
          shape="rounded"
          size="52"
        />
        <Avatar
          type="initials"
          initials="JS"
          shape="rounded"
          size="64"
        />

        <Avatar
          type="picture"
          imageUrl="https://i.pravatar.cc/300"
          shape="square"
          size="64"
          upperBadge
        />
        <Avatar
          type="picture"
          imageUrl="https://i.pravatar.cc/300"
          shape="square"
          size="24"
          upperBadge
        />

        <Button size="s" variant="contained">
          Enabled
        </Button>
        <Button size="s" variant="contained" disabled>
          Disabled
        </Button>

        <Button size="s" variant="outlined">
          Enabled
        </Button>
        <Button size="s" variant="outlined" disabled>
          Disabled
        </Button>

        <Button size="s" variant="ghost">
          Enabled
        </Button>
        <Button size="s" variant="ghost" disabled>
          Disabled
        </Button>

      </div>
    </>
  );
}

export default App;