import React from "react";
import "./App.css";
import Button from "./components/button/button";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Button
          text='LOG IN'
          buttonType='button-clear'
          textType='button-text-white'
          onPress={() => console.log("I'm the first button.")}
        />
        <Button
          text='CONTINUE'
          buttonType='button-green'
          textType='button-text-white'
          onPress={() => console.log("I'm the second.")}
        />
        <Button
          text='SKIP'
          buttonType='button-white'
          textType='button-text-grey'
          onPress={() => console.log("Third.")}
        />
        <Button
          text='ONCE A DAY'
          buttonType='button-clearAlt'
          textType='button-text-green'
          onPress={() => console.log("Hello! I'm the last button!")}
        />
      </header>
    </div>
  );
}

export default App;