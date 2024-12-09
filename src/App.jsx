import { Routes, Route } from "react-router";

import Home from "./routes/home";
import WithHoc from "./routes/hoc/with";
import WithoutHoc from "./routes/hoc/without";
import WithoutComposition from "./routes/composition/without";
import WithComposition from "./routes/composition/with";
import CompoundPattern from "./routes/compound";
import WithPortal from "./routes/portal/with";
import WithoutPortal from "./routes/portal/without";
import RenderPropsPattern from "./routes/render-props";

function App() {
  return (
    <div className="bg-black min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hoc/with" element={<WithHoc />} />
        <Route path="/hoc/without" element={<WithoutHoc />} />
        <Route path="/composition/with" element={<WithComposition />} />
        <Route path="/composition/without" element={<WithoutComposition />} />
        <Route path="/compound" element={<CompoundPattern />} />
        <Route path="portal/with" element={<WithPortal />} />
        <Route path="portal/without" element={<WithoutPortal />} />
        <Route path="render-props" element={<RenderPropsPattern />} />
      </Routes>
    </div>
  );
}

export default App;
