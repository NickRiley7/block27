import { useState } from 'react'
import "./App.css";
import SignUpForm from "./components/SignUpForm.";
import Authenticate from "./components/Authenticate"

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <signUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />    
    </>
  );
}

export default App;
