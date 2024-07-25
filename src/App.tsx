import { Routes, Route } from "react-router-dom";
import Start from "./components/Start.tsx";
import Registration from "./components/Registration.tsx";
import Table from "./components/Table.tsx";
import ApiData from "./components/API.tsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/form" element={<Table />} />
        <Route path="/apidata" element={<ApiData />} />
      </Routes>
    </>
  );
}

export default App;
