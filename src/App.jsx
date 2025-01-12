import { useState } from "react";
import Header from "./Components/Header";
import Results from "./Components/Results";
import UserInput from "./Components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {isInputValid ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Please Enter Valid Duration!</p>
      )}
    </>
  );
}

export default App;
