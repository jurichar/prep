import fusionSort from "../../work/exercise";

test("Tri 4 devrait retourner un tableau trié", () => {
  // Test avec un tableau non trié
  expect(fusionSort([4, 2, 1, 3])).toEqual([1, 2, 3, 4]);

  // Test avec un tableau déjà trié
  expect(fusionSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);

  // Test avec un tableau trié en ordre décroissant
  expect(fusionSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);

  // Test avec des éléments identiques
  expect(fusionSort([2, 2, 2, 2])).toEqual([2, 2, 2, 2]);

  // Test avec un tableau vide
  expect(fusionSort([])).toEqual([]);
});
