import practice_1 from "../../work/exercise_20";

test("practice_1 devrait retourner la quantité de puissance à équilibrer entre les équipes", () => {
  const teamA1 = [3, 4, 5, 0];
  const teamB1 = [1, 2, 0, 0];
  expect(practice_1(teamA1, teamB1)).toEqual(13);

  const teamA2 = [0, 0, 0, 0];
  const teamB2 = [0, 0, 0, 0];
  expect(practice_1(teamA2, teamB2)).toEqual(4);

  const teamA3 = [3, 4];
  const teamB3 = [1, 2, 0, 0];
  expect(practice_1(teamA3, teamB3)).toEqual(7);

  const teamA4 = [3, 4, 5, 0, 0, 0];
  const teamB4 = [1, 2, 0];
  expect(practice_1(teamA4, teamB4)).toEqual(15);

  const teamA5 = [];
  const teamB5 = [1, 2, 3, 4];
  expect(practice_1(teamA5, teamB5)).toEqual(11);

  const teamA6 = [1, 2, 3, 4];
  const teamB6 = [];
  expect(practice_1(teamA6, teamB6)).toEqual(10);

  const teamA7 = [1, 10000, 10000, 10000, 0, 0];
  const teamB7 = [1, 2, 0, 4, 0];
  expect(practice_1(teamA7, teamB7)).toEqual(30003);
});
