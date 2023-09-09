import nQueens from "../../work/exercise";

test("nQueens devrait retourner toutes les solutions possibles", () => {
  // Test avec un petit échiquier
  expect(nQueens(4)).toEqual([
    [1, 3, 0, 2],
    [2, 0, 3, 1],
  ]);

  // Test avec un échiquier de taille 1 (doit avoir une solution)
  expect(nQueens(1)).toEqual([[0]]);

  // Test avec un échiquier de taille 2 (ne peut pas avoir de solutions)
  expect(nQueens(2)).toEqual([]);
});
