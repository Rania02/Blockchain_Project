import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./Auth/Screens/Signin.jsx";
import SignUp from "./Auth/Screens/Signup.jsx";
import Login from "./Auth/Screens/Login.jsx";
import Home from "./Home/Home.jsx";
import Roadmap from "./Home/Roadmap.jsx";

function App() {
  const email = localStorage.getItem("email");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login"
            element={email ? <Login /> : <Navigate to="/signup" />}
          />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
