import binarySearch from "../../work/exercise";

test("binarySearch devrait retourner l'index de l'élément recherché", () => {
  // Test avec un élément présent dans le tableau
  expect(binarySearch([1, 2, 3, 4], 3)).toEqual(2);

  // Test avec un élément absent du tableau
  expect(binarySearch([1, 2, 3, 4], 5)).toEqual(-1);

  // Test avec un tableau vide
  expect(binarySearch([], 1)).toEqual(-1);
});
