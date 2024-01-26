import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./Auth/Screens/Signin";
import SignUp from "./Auth/Screens/Signup";
import Home from "./Auth/Screens/Home";
 
function App() {
  const email = localStorage.getItem("email");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/Home"
            element={email ? <Home /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

