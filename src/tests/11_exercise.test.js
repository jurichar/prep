import depthFirstSearch from "../../work/exercise";

test("depthFirstSearch devrait retourner le parcours en profondeur", () => {
  let graph = { 0: [1, 2], 1: [2], 2: [0, 3], 3: [3] };

  // Test avec un graphe normal
  expect(depthFirstSearch(graph, 2)).toEqual([2, 3, 0, 1]);

  // Test avec un noeud sans voisins
  expect(depthFirstSearch(graph, 3)).toEqual([3]);

  // Test avec un noeud qui n'existe pas
  expect(depthFirstSearch(graph, 4)).toEqual(null);
});
