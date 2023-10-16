import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import { DirectoryContextProvider } from "./context/directory-context";

function App() {
  return (
    <div className="App">
      <DirectoryContextProvider>
        <Router>
          <SideBar />
        </Router>
      </DirectoryContextProvider>
    </div>
  );
}

export default App;
