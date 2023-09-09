import charCount from "../../work/exercise";

test("charCount devrait retourner le nombre d'occurrences d'un caractère", () => {
  // Test avec une chaîne normale
  expect(charCount("hello", "l")).toEqual(2);

  // Test avec un caractère non présent dans la chaîne
  expect(charCount("hello", "z")).toEqual(0);

  // Test avec une chaîne vide
  expect(charCount("", "a")).toEqual(0);
});
