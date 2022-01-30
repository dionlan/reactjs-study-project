import React, { useState } from "react";
import ExampleEffect001 from './ReactHooks/useEffect/useEffect001'

function App() {

  const [visible, setVisible] = useState(true);
  
  setTimeout(() => {
    setVisible(false)
  }, 5000)
  
  return visible && <ExampleEffect001 />;
}
export default App;