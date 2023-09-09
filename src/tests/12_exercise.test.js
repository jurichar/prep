import breadthFirstSearch from "../../work/exercise_12";

test("breadthFirstSearch devrait retourner le parcours en largeur", () => {
  let graph = { 0: [1, 2], 1: [2], 2: [0, 3], 3: [3] };

  // Test avec un graphe normal
  expect(breadthFirstSearch(graph, 2)).toEqual([2, 0, 3, 1]);

  // Test avec un noeud sans voisins
  expect(breadthFirstSearch(graph, 3)).toEqual([3]);

  // Test avec un noeud qui n'existe pas
  expect(breadthFirstSearch(graph, 4)).toEqual(null);
});
