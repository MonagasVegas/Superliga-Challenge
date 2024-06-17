import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import CardTable from "./components/CardTable";
import Table from "./components/Table";
import FileAdded from "./components/FileAdded";
import RequirementFive from "./components/Requirements/RequirementFive";
import RequirementFour from "./components/Requirements/RequirementFour";
import RequirementThree from "./components/Requirements/RequirementThree";
import RequirementTwo from "./components/Requirements/RequirementTwo";
import RequirementOne from "./components/Requirements/RequirementOne";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/table' element={<Table />} />
          <Route path='/file-added' element={<FileAdded />} />

          <Route path='/requirement1' element={<RequirementOne />} />
          <Route path='/requirement2' element={<RequirementTwo />} />
          <Route path='/requirement3' element={<RequirementThree />} />
          <Route path='/requirement4' element={<RequirementFour />} />
          <Route path='/requirement5' element={<RequirementFive />} />
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
