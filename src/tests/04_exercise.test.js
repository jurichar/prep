import quickSort from "../../work/exercise_4";

test("Tri 5 devrait retourner un tableau trié", () => {
  // Test avec un tableau non trié
  expect(quickSort([4, 2, 1, 3])).toEqual([1, 2, 3, 4]);

  // Test avec un tableau déjà trié
  expect(quickSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);

  // Test avec un tableau trié en ordre décroissant
  expect(quickSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);

  // Test avec des éléments identiques
  expect(quickSort([2, 2, 2, 2])).toEqual([2, 2, 2, 2]);

  // Test avec un tableau vide
  expect(quickSort([])).toEqual([]);
});
