import stringReverse from "../../work/exercise_8";

test("stringReverse devrait retourner la chaîne inversée", () => {
  // Test avec une chaîne normale
  expect(stringReverse("abcd")).toEqual("dcba");

  // Test avec une chaîne vide
  expect(stringReverse("")).toEqual("");

  // Test avec des espaces dans la chaîne
  expect(stringReverse("ab cd")).toEqual("dc ba");
});
