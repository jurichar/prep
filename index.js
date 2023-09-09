import fs from "fs";
import { exec } from "child_process";
import chalk from "chalk";

let currentExercise = 0;
let numberOfExercises = 2; // Adapte ce nombre selon le nombre réel d'exercices
let score = 0;

function startTraining() {
  console.log(chalk.yellow("Commencement de l'entraînement !"));
  copyExercise(currentExercise);
}

function copyExercise(exerciseNumber) {
  const src = `./src/exercises/${exerciseNumber
    .toString()
    .padStart(2, "0")}_exercise.js`;
  const dest = `./work/exercise_${exerciseNumber}.js`;

  fs.copyFileSync(src, dest);
  console.log(chalk.green(`Exercice ${exerciseNumber} prêt à être résolu !`));
}

function runTests() {
  const exerciseNumber = currentExercise.toString().padStart(2, "0");
  exec(
    `npm test src/tests/${exerciseNumber}_exercise.test.js`,
    (error, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);

      if (error) {
        console.log(chalk.red(`Failed ! Retry`));
        console.log(chalk.red(`Score : ${score}`));
        return;
      }

      console.log(chalk.green("Le test a réussi !"));
      score += 10; // Augmente le score de l'utilisateur
      console.log(chalk.blue(`Votre score est maintenant de : ${score}`));
      currentExercise += 1;

      if (currentExercise >= numberOfExercises) {
        console.log(
          chalk.yellow("Bravo ! Vous avez complété tous les exercices.")
        );
        console.log(chalk.blue(`Score final : ${score}`));
        process.exit(0); // Ferme le programme
      } else {
        copyExercise(currentExercise);
        console.log(chalk.yellow("Passons à l'exercice suivant."));
      }
    }
  );
}

// Gère les commandes de l'utilisateur
process.stdin.on("data", function (data) {
  const command = data.toString().trim();

  if (command === "start") {
    startTraining();
  } else if (command === "test") {
    runTests();
  }
});

console.log(
  chalk.cyan(
    "Entrez 'start' pour commencer l'entraînement, et 'test' pour tester votre solution."
  )
);
