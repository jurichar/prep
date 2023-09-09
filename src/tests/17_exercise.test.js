import knapsack from "../../work/exercise_17";

test("knapsack devrait retourner la valeur maximale pouvant être emportée", () => {
  // Test avec un sac à dos normal
  expect(knapsack([1, 2, 3], [60, 100, 120], 5)).toEqual(220);

  // Test avec un sac à dos vide
  expect(knapsack([], [], 5)).toEqual(0);
});
