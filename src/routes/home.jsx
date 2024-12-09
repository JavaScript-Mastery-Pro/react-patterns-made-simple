import { Link } from "react-router";

const patterns = [
  {
    title: "Without HOC",
    description:
      "A demo code without HOC, where using it will enable us to reuse code.",
    path: "/hoc/without",
  },
  {
    title: "With HOC",
    description:
      "A demo with HOC, which is a higher-order component (HOC) that takes a component as an argument and returns a new component.",
    path: "/hoc/with",
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
