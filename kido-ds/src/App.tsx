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
      <div className='flex gap-2 items-center'>
        <Avatar
          type="initials"
          initials="AD"
          shape="circle"
          size={40}
          lowerBadge
          outline
        />
        <Avatar
          type="initials"
          initials="AD"
          shape="rounded"
          size={40}
          lowerBadge
          outline
        />
        <Avatar
          type="initials"
          initials="AD"
          shape="square"
          size={40}
          lowerBadge
          outline
        />
        <Avatar
          type="picture"
          imageUrl="https://i.pravatar.cc/300"
          shape="rounded"
          size={40}
          upperBadge
        />
      </div>
      <div className='flex gap-2 items-center'>
        <Button size="l" variant="contained" iconL={<ReactLogo />} disabled>
          Large
        </Button>
        <Button size="m" variant="contained" iconL={<ReactLogo />}>
          Medium
        </Button>
        <Button size="s" variant="contained" iconL={<ReactLogo />}>
          Small
        </Button>
      </div>
      <br />
      <div className='flex gap-2 items-center'>
        <Button size="l" variant="contained">
          OK
        </Button>
        <Button size="m" variant="contained">
          OK
        </Button>
        <Button size="s" variant="contained">
          OK
        </Button>
      </div>
      <br /><br />
      <div className='flex gap-2 items-center'>
        <Button size="l" variant="outlined" iconL={<ReactLogo />} disabled>
          Large
        </Button>
        <Button size="m" variant="outlined" iconL={<ReactLogo />}>
          Medium
        </Button>
        <Button size="s" variant="outlined" iconL={<ReactLogo />}>
          Small
        </Button>
      </div>
      <br /><br />
      <div className='flex gap-2 items-center'>
        <Button size="l" variant="ghost" iconL={<ReactLogo />} disabled>
          Large
        </Button>
        <Button size="m" variant="ghost" iconL={<ReactLogo />}>
          Medium
        </Button>
        <Button size="s" variant="ghost" iconL={<ReactLogo />}>
          Small
        </Button>
      </div>
      <br /><br />
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