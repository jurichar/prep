import firstNonRepeatingChar from "../../work/exercise_9";

test("firstNonRepeatingChar devrait retourner le premier caractère non répété", () => {
  // Test avec une chaîne normale
  expect(firstNonRepeatingChar("swiss")).toEqual("w");

  // Test avec tous les caractères répétés
  expect(firstNonRepeatingChar("aabbcc")).toEqual(null);

  // Test avec une chaîne vide
  expect(firstNonRepeatingChar("")).toEqual(null);
});
