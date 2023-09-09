import dijkstra from "../../work/exercise_13";

test("dijkstra devrait retourner le chemin le plus court", () => {
  let graph = { a: { b: 1, c: 4 }, b: { c: 2, d: 5 }, c: { d: 3 }, d: {} };

  // Test avec un graphe normal
  expect(dijkstra(graph, "a", "d")).toEqual(["a", "b", "c", "d"]);

  // Test avec un noeud de départ qui n'existe pas
  expect(dijkstra(graph, "z", "d")).toEqual(null);

  // Test avec un noeud d'arrivée qui n'existe pas
  expect(dijkstra(graph, "a", "z")).toEqual(null);
});
