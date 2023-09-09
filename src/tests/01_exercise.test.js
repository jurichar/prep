import insertionSort from "../../work/exercise_1";

test("Tri 2 devrait retourner un tableau trié", () => {
  // Test avec un tableau non trié
  expect(insertionSort([4, 2, 1, 3])).toEqual([1, 2, 3, 4]);

  // Test avec un tableau déjà trié
  expect(insertionSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);

  // Test avec un tableau trié en ordre décroissant
  expect(insertionSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);

  // Test avec des éléments identiques
  expect(insertionSort([2, 2, 2, 2])).toEqual([2, 2, 2, 2]);

  // Test avec un tableau vide
  expect(insertionSort([])).toEqual([]);
});
