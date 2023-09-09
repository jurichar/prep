const fs = require("fs");
const { exec } = require("child_process");

let currentExercise = 0;
let numberOfExercises = 1;

function startTraining() {
  copyExercise(currentExercise);
}

function copyExercise(exerciseNumber) {
  const src = `./src/exercises/${exerciseNumber
    .toString()
    .padStart(2, "0")}_exercise.js`;
  const dest = `./work/exercise_${exerciseNumber}.js`;

  fs.copyFileSync(src, dest);
  console.log(`Exercice ${exerciseNumber} prêt à être résolu !`);
}

function runTests() {
  exec("npm test", (error, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);

    if (error) {
      console.log(`Erreur : ${error.message}`);
      return;
    }

    console.log("Tous les tests ont réussi !");
    currentExercise += 1;

    if (currentExercise >= numberOfExercises) {
      console.log("Bravo ! Vous avez complété tous les exercices.");
      process.exit(0); // Ferme le programme
    } else {
      copyExercise(currentExercise);
      console.log("Passons à l'exercice suivant.");
    }
  });
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
  "Entrez 'start' pour commencer l'entraînement, et 'test' pour tester votre solution."
);
