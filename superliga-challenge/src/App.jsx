import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
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
