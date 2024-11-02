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
              children: [
                {
                  name: "type.d.ts",
                },
              ],
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

function App() {
  return (
    <div>
      <ul>
        {files.src.map((file) => (
          <FileTree {...file} />
        ))}
      </ul>
    </div>
  );
}

function FileTree({ name, children }: TFile) {
  return (
    <div>
      {children?.map((child) => (
        <Folders {...child} />
      ))}

      <li>{name}</li>
    </div>
  );
}

function Folders({ name, children }: TFile) {
  return (
    <div>
      <details>
        <summary className="-ml-20">{name}</summary>
        {children?.map((child) => (
          <Folder {...child} />
        ))}
      </details>
    </div>
  );
}

function Folder({ children, name }: TFile) {
  if (!children) {
    return <li>{name}</li>;
  }

  return (
    <details>
      <summary>{name}</summary>
      {children.map((child) => (
        <li className="ml-16">{child.name}</li>
      ))}
    </details>
  );
}

export default App;
