import longestCommonSubsequence from "../../work/exercise";

test("longestCommonSubsequence devrait retourner le plus long sous-ensemble commun", () => {
  // Test avec deux chaînes non vides
  expect(longestCommonSubsequence("ABCBDAB", "BDCABA")).toEqual("BCBA");

  // Test avec une chaîne vide
  expect(longestCommonSubsequence("", "BDCABA")).toEqual("");

  // Test avec deux chaînes vides
  expect(longestCommonSubsequence("", "")).toEqual("");
});
