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

import HOCExercise from "./routes/hoc/exercise/problem";
import HOCExerciseSolution from "./routes/hoc/exercise/solution";

import CompositionExercise from "./routes/composition/exercise/problem";
import CompositionExerciseSolution from "./routes/composition/exercise/solution";

import CompoundExercise from "./routes/compound/exercise/problem";
import CompoundExerciseSolution from "./routes/compound/exercise/solution";

import PortalToastExercise from "./routes/portal/exercise/problem";
import PortalToastSolution from "./routes/portal/exercise/solution";

function App() {
  return (
    <div className="bg-black min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hoc/with" element={<WithHoc />} />
        <Route path="/hoc/without" element={<WithoutHoc />} />
        <Route path="/hoc/exercise/problem" element={<HOCExercise />} />
        <Route
          path="/hoc/exercise/solution"
          element={<HOCExerciseSolution />}
        />

        <Route path="/composition/with" element={<WithComposition />} />
        <Route path="/composition/without" element={<WithoutComposition />} />
        <Route
          path="/composition/exercise/problem"
          element={<CompositionExercise />}
        />
        <Route
          path="/composition/exercise/solution"
          element={<CompositionExerciseSolution />}
        />

        <Route path="/compound" element={<CompoundPattern />} />
        <Route
          path="/compound/exercise/problem"
          element={<CompoundExercise />}
        />
        <Route
          path="/compound/exercise/solution"
          element={<CompoundExerciseSolution />}
        />

        <Route path="portal/with" element={<WithPortal />} />
        <Route path="portal/without" element={<WithoutPortal />} />
        <Route
          path="/portal/exercise/problem"
          element={<PortalToastExercise />}
        />
        <Route
          path="/portal/exercise/solution"
          element={<PortalToastSolution />}
        />

        <Route path="render-props" element={<RenderPropsPattern />} />
      </Routes>
    </div>
  );
}

export default App;
