import linearSearch from "../../work/exercise_6";

test("linearSearch devrait retourner l'index de l'élément recherché", () => {
  // Test avec un élément présent dans le tableau
  expect(linearSearch([4, 2, 1, 3], 2)).toEqual(1);

  // Test avec un élément absent du tableau
  expect(linearSearch([4, 2, 1, 3], 5)).toEqual(-1);

  // Test avec un tableau vide
  expect(linearSearch([], 1)).toEqual(-1);
});
