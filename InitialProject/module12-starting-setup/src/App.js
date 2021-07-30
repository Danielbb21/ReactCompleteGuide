import React, { useState, useCallback } from 'react';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';
import Button from './components/UI/Button/Button';


function App() {
  const [showParagraph, setshowParagraph] = useState(false);
  const [allowTogele, setAllowToggle] = useState(false);
  const showParagrahHandler = useCallback(() => {
    if (allowTogele) {
      setshowParagraph((previus) => {
        return !previus;
      }
      );
    }
  }, [allowTogele]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>

      <DemoOutput isShow={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle!</Button>
      <Button onClick={showParagrahHandler}>Show paragraph</Button>
    </div>
  );
}

export default App;
