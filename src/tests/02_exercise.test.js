import selectSort from "../../work/exercise";

test("Tri 3 devrait retourner un tableau trié", () => {
  // Test avec un tableau non trié
  expect(selectSort([4, 2, 1, 3])).toEqual([1, 2, 3, 4]);

  // Test avec un tableau déjà trié
  expect(selectSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);

  // Test avec un tableau trié en ordre décroissant
  expect(selectSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);

  // Test avec des éléments identiques
  expect(selectSort([2, 2, 2, 2])).toEqual([2, 2, 2, 2]);

  // Test avec un tableau vide
  expect(selectSort([])).toEqual([]);
});
