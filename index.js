import fs from "fs";
import { exec } from "child_process";
import chalk from "chalk";

let currentExercise = 0;
let numberOfExercises = 2; // Adapte ce nombre selon le nombre réel d'exercices
let score = 0;

const programParts = {
  "part-1": { start: 0, end: 5, name: "Algorithmes de Tri" },
  "part-2": { start: 6, end: 7, name: "Algorithmes de Recherche" },
  "part-3": {
    start: 8,
    end: 10,
    name: "Algorithmes sur les Chaînes de Caractères",
  },
  "part-4": { start: 11, end: 12, name: "Algorithmes sur les Arbres" },
  "part-5": { start: 13, end: 14, name: "Algorithmes sur les Graphes" },
  "part-6": { start: 15, end: 16, name: "Algorithmes de Backtracking" },
  "part-7": { start: 17, end: 19, name: "Algorithmes Dynamiques" },
  all: { start: 0, end: 19, name: "All part" },
};

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

function selectPart(part) {
  if (programParts[part]) {
    currentExercise = programParts[part].start;
    numberOfExercises = programParts[part].end + 1;
    console.log(
      chalk.green(
        `Vous avez sélectionné la ${part}, ${programParts[part].name} avec des exercices de ${currentExercise} à ${programParts[part].end}`
      )
    );
  } else {
    console.log(chalk.red(`La partie ${part} n'existe pas !`));
  }
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

  if (command.startsWith("select ")) {
    const part = command.split(" ")[1];
    selectPart(part);
  } else if (command === "start") {
    startTraining();
  } else if (command === "test") {
    runTests();
  }
});

console.log(
  chalk.cyan(
    "Entrez 'select part-n' pour choisir une partie\n('n': [1 - 7] | 'all')\n- 'start' pour commencer l'entraînement\n- 'test' pour tester votre solution."
  )
);
