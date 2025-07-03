import { Link } from "react-router";

const patterns = [
  {
    title: "HOC - Without Pattern",
    description:
      "A demo showing code duplication that can be fixed by using a Higher-Order Component (HOC).",
    path: "/hoc/without",
  },
  {
    title: "HOC - With Pattern",
    description:
      "A demo showing how a Higher-Order Component (HOC) helps to reuse logic and make code cleaner.",
    path: "/hoc/with",
  },
  {
    title: "HOC Auth Exercise",
    description:
      "An exercise where you create a withAuth HOC to protect Profile and Settings pages, including a login form and conditional rendering.",
    path: "/hoc/exercise/problem",
  },
  {
    title: "HOC Auth Solution",
    description:
      "Solution to the withAuth HOC exercise, showing how to protect pages with login logic using a Higher-Order Component.",
    path: "/hoc/exercise/solution",
  },
  {
    title: "Composition - Without Pattern",
    description:
      "A demo showing a rigid structure that could be improved by using the Composition Pattern.",
    path: "/composition/without",
  },
  {
    title: "Composition - With Pattern",
    description:
      "A demo showing how the Composition Pattern helps to create reusable and flexible components.",
    path: "/composition/with",
  },
  {
    title: "Composition Card Exercise",
    description:
      "An exercise to refactor a monolithic ProductCard into flexible, composable components using the Composition Pattern.",
    path: "/composition/exercise/problem",
  },
  {
    title: "Composition Card Solution",
    description:
      "A solution showing how to break down a complex ProductCard into reusable components using Composition Pattern.",
    path: "/composition/exercise/solution",
  },
  {
    title: "Compound Components Pattern",
    description:
      "A demo showing how Compound Components work together to manage complex UIs in a simple way.",
    path: "/compound",
  },
  {
    title: "Portal - With Pattern",
    description:
      "A demo using the Portal Pattern to render components outside the main DOM tree for advanced UI needs.",
    path: "/portal/with",
  },
  {
    title: "Portal - Without Pattern",
    description:
      "A demo showing the limitations of rendering components inside the main DOM tree without using Portals.",
    path: "/portal/without",
  },
  {
    title: "Render Props Pattern",
    description:
      "A demo using the Render Props Pattern to share functionality between components through a function.",
    path: "/render-props",
  },
];

const Home = () => {
  return (
    <main className="container">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-zinc-50">React Patterns</h1>
        <ol className="flex flex-col mt-10">
          {patterns.map((pattern, index) => (
            <li
              key={index}
              className="flex flex-row gap-2 p-5 hover:bg-zinc-800/50 rounded-lg"
            >
              <p>
                <span className="text-sm font-bold text-zinc-50">
                  {index + 1}.
                </span>
              </p>
              <div className="flex flex-col gap-2 flex-1">
                <Link
                  to={pattern.path}
                  className="text-md font-semibold text-blue-600"
                >
                  {pattern.title}
                </Link>
                <p className="text-gray-400 text-xs">{pattern.description}</p>
              </div>

              <svg
                className="size-6 text-gray-600 -rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 13.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 13.586z"
                />
              </svg>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default Home;
