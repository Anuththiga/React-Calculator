import logo from './logo.svg';
import './App.css';
import Wrapper from './Components/Wrapper';
import Screen from './Components/Screen';
import ButtonBox from './Components/ButtonBox';
import Button from './Components/Button';

function App() {
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  return (
    <div>
      <Wrapper>
        <Screen/>
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button 
              value={btn}
              key={i}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;
