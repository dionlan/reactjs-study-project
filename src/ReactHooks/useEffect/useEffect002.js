import './App.css';
import { useEffect, useState } from "react";

function ExampleUsetEffect() {
  
  const [isLoading, setIsLoading] = useState(null);

  const buttonHandler = () => {
    setIsLoading(prev => !prev)
  }

  useEffect( () => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <div className="App">
      <header className="App-header">
        <div> 
          <button onClick={buttonHandler} type="button">
              Change
          </button>
          {isLoading? "Loading...": null}
          </div>
      </header>
    </div>
  );
}

export default ExampleUsetEffect;
