import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import HomeView from "./views/HomeView/HomeView";
import AddView from "./views/AddView/AddView";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route index element={<HomeView />}></Route>
      <Route path="add-view" element={<AddView />}></Route>
      {/* <div className="App">
        <header className="App-header"></header>
      </div> */}
    </Routes>
  );
}

export default App;
