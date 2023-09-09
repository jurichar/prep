import generateCombinations from "../../work/exercise";

test("generateCombinations devrait générer toutes les combinaisons possibles", () => {
  // Test avec un petit ensemble de données
  expect(generateCombinations(["a", "b"], 2)).toEqual([
    ["a", "a"],
    ["a", "b"],
    ["b", "a"],
    ["b", "b"],
  ]);

  // Test avec une seule donnée
  expect(generateCombinations(["a"], 2)).toEqual([["a", "a"]]);
});
