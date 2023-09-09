import fibMemoization from "../../work/exercise_18";

test("fibMemoization devrait retourner le bon nombre de Fibonacci", () => {
  // Test avec des petites valeurs
  expect(fibMemoization(0)).toEqual(0);
  expect(fibMemoization(1)).toEqual(1);
  expect(fibMemoization(2)).toEqual(1);

  // Test avec des valeurs plus élevées
  expect(fibMemoization(10)).toEqual(55);
  expect(fibMemoization(20)).toEqual(6765);
});
