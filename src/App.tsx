import "./App.css";

type TFile = {
  name: string;
  children?: TFile[];
};

const files = {
  src: [
    {
      name: "node_modules",
      children: [
        {
          name: "joi",
          children: [
            {
              name: "types",
            },
            {
              name: "docs",
            },
          ],
        },
      ],
    },
    {
      name: "package.json",
    },
    {
      name: "vite.config.ts",
    },
  ],
};

function File({ name, children }: TFile) {
  return (
    <>
      <li className="list-disc">{name}</li>
      {children &&
        children.map((child) => (
          <>
            <details>
              <summary>{child.name}</summary>
              {child.children &&
                child.children.map((c) =>
                  c.children ? (
                    c.children.map((child) => (
                      <details className="ml-8">
                        <summary>{child.name}</summary>
                      </details>
                    ))
                  ) : (
                    <p className="ml-8">{c.name}</p>
                  )
                )}
            </details>
          </>
        ))}
    </>
  );
}

function App() {
  return (
    <div>
      <ul>
        {files.src.map((file) => (
          <File {...file} />
        ))}
      </ul>
    </div>
  );
}

export default App;
