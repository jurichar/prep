import kruskal from "../../work/exercise";

test("kruskal devrait retourner l'arbre couvrant minimal", () => {
  let graph = {
    edges: [
      { source: "a", target: "b", weight: 1 },
      { source: "b", target: "c", weight: 2 },
      { source: "a", target: "c", weight: 2 },
      { source: "c", target: "d", weight: 1 },
    ],
    vertices: ["a", "b", "c", "d"],
  };

  // Test avec un graphe normal
  expect(kruskal(graph)).toEqual([
    { source: "a", target: "b", weight: 1 },
    { source: "c", target: "d", weight: 1 },
    { source: "b", target: "c", weight: 2 },
  ]);

  // Test avec un graphe vide
  expect(kruskal({ edges: [], vertices: [] })).toEqual([]);
});
