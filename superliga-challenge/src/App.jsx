import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import CardTable from "./components/CardTable";
import Table from "./components/Table";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/table' element={<Table />} />
          <Route
            path="*"
            element={
              <h1 className="text-2xl font-bold flex justify-center py-20">
                Not Found
              </h1>
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
