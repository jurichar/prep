import heapSort from "../../work/exercise_5";

test("Tri 6 devrait retourner un tableau trié", () => {
  // Test avec un tableau non trié
  expect(heapSort([4, 2, 1, 3])).toEqual([1, 2, 3, 4]);

  // Test avec un tableau déjà trié
  expect(heapSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);

  // Test avec un tableau trié en ordre décroissant
  expect(heapSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);

  // Test avec des éléments identiques
  expect(heapSort([2, 2, 2, 2])).toEqual([2, 2, 2, 2]);

  // Test avec un tableau vide
  expect(heapSort([])).toEqual([]);
});
