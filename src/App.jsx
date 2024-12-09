import { Routes, Route } from "react-router";

import Home from "./routes/home";
import WithHoc from "./routes/hoc/with";
import WithoutHoc from "./routes/hoc/without";

function App() {
  return (
    <div className="bg-black min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hoc/with" element={<WithHoc />} />
        <Route path="/hoc/without" element={<WithoutHoc />} />
      </Routes>
    </div>
  );
}

export default App;
