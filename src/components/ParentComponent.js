import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const initialMessage = "Hello from Parent Component!";
  const [message, setMessage] = useState(initialMessage);

  const updateMessage = () => {
    setMessage("Message Updated!");
  };

  const resetMessage = () => {
    setMessage(initialMessage);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={updateMessage}>Update Message</button>
      <button onClick={resetMessage}>Reset</button>
      <ChildComponent message={message} />
    </div>
  );
}

export default ParentComponent;
