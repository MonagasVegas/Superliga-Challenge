import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="*" element={<h1 className="text-2xl font-bold flex justify-center py-20">Not Found</h1>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
