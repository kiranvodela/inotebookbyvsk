import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "./components/Navbar"; // Adjust the import based on your file structure
import  About  from "./components/About"; // Import your About component
import { Home } from "./components/Home"; // Import your Home component
import { NoteState } from "./components/context/notes/NoteState"; // Import your About component
import Alert from "./components/Alert";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login showAlert={showAlert} />} />
            <Route path="/signup" element={<Signup showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
};

export default App;
