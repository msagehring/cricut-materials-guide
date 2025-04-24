
const { useState } = React;

const materials = [
  {
    name: "Acetate",
    category: "Paper & Plastics",
    blade: "Fine-Point Blade",
    pressure: "319",
    tip: "Use a brayer to flatten acetate on your mat.",
    link: "https://learn.cricut.com/how-to-make-shaker-cards",
    compatible: "Cardstock, glitter paper, vellum"
  },
  {
    name: "Adhesive Foil",
    category: "Vinyls",
    blade: "Fine-Point Blade",
    pressure: "121",
    tip: "Great for long-lasting decals. Avoid on walls.",
    link: "https://cricut.com/create/decal",
    compatible: "Transfer tape, mugs, tumblers"
  },
  {
    name: "Iron-On (HTV)",
    category: "Heat Transfer",
    blade: "Fine-Point Blade",
    pressure: "315",
    tip: "Always mirror your image. Follow the heat guide.",
    link: "https://cricut.com/en-us/heatguide",
    compatible: "Cotton, polyester blends"
  }
];

function App() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = materials.filter(
    (m) =>
      m.name.toLowerCase().includes(query.toLowerCase()) &&
      (filter === "All" || m.category === filter)
  );

  const categories = ["All", ...new Set(materials.map((m) => m.category))];

  return (
    React.createElement("div", { className: "max-w-xl mx-auto p-4" },
      React.createElement("h1", { className: "text-xl font-bold mb-4" }, "Cricut Material Guide"),
      React.createElement("input", {
        className: "mb-4 w-full border px-3 py-2 rounded",
        placeholder: "Search materials...",
        value: query,
        onChange: (e) => setQuery(e.target.value)
      }),
      React.createElement("div", { className: "flex gap-2 flex-wrap mb-4" },
        categories.map((cat) =>
          React.createElement("button", {
            key: cat,
            className: `px-3 py-1 rounded border ${filter === cat ? 'bg-black text-white' : 'bg-white'}`,
            onClick: () => setFilter(cat)
          }, cat)
        )
      ),
      React.createElement("div", { className: "space-y-4" },
        filtered.map((m) =>
          React.createElement("div", { key: m.name, className: "bg-white p-4 shadow rounded" },
            React.createElement("h2", { className: "font-semibold text-lg" }, m.name),
            React.createElement("p", null, React.createElement("strong", null, "Blade: "), m.blade),
            React.createElement("p", null, React.createElement("strong", null, "Pressure: "), m.pressure),
            React.createElement("p", null, React.createElement("strong", null, "Compatible with: "), m.compatible),
            React.createElement("p", null, React.createElement("strong", null, "Tip: "), m.tip),
            React.createElement("a", { href: m.link, target: "_blank", className: "text-blue-600 underline" }, "Tutorial")
          )
        )
      )
    )
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
