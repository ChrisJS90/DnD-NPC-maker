import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import CreateNew from "./pages/createNew";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-new" element={<CreateNew />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
