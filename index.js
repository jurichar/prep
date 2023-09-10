import fs from "fs";
import { exec } from "child_process";
import chalk from "chalk";

let currentExercise = 0;
let numberOfExercises = 0;
let score = 0;
let chronoStart;
let selectedPartName;
let selectedPartNumber;

const programParts = {
  1: { start: 0, end: 5, name: "Algorithmes de Tri" },
  2: { start: 6, end: 7, name: "Algorithmes de Recherche" },
  3: {
    start: 8,
    end: 10,
    name: "Algorithmes sur les Chaînes de Caractères",
  },
  4: { start: 11, end: 12, name: "Algorithmes sur les Arbres" },
  5: { start: 13, end: 14, name: "Algorithmes sur les Graphes" },
  6: { start: 15, end: 16, name: "Algorithmes de Backtracking" },
  7: { start: 17, end: 19, name: "Algorithmes Dynamiques" },
  all: { start: 0, end: 19, name: "All part" },
};

const logDir = "./logs";

function startTraining() {
  console.log(chalk.yellow("Commencement de l'entraînement !"));
  chronoStart = Date.now();
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
    selectedPartName = programParts[part].name;
    selectedPartNumber = part;
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
      console.log(chalk.green(stdout));
      if (stderr) {
        logError(stderr);
      }

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
        clean();
        process.exit(0); // Ferme le programme
        //   scoreFilePath,
        //   `${date} ${time}, ${duration} mins, Partie : ${selectedPart}, Score : ${score}\n`
        // );

        // process.exit(0); // Ferme le programme
      } else {
        copyExercise(currentExercise);
        console.log(chalk.yellow("Passons à l'exercice suivant."));
      }
    }
  );
}

function logError(message) {
  const date = new Date();
  const formattedDate = date
    .toISOString()
    .split("T")[0]
    .replace(/-/g, "")
    .slice(4);
  const time = date.toTimeString().split(" ")[0].replace(/:/g, "");

  const logFile = `${logDir}/error_${formattedDate}_${time}.log`;

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }

  fs.appendFileSync(logFile, message + "\n");
}

function initializeDirectory() {
  if (fs.existsSync(logDir)) {
    fs.rmSync(logDir, { recursive: true }); // Suppression du dossier de logs existant
  }
  fs.mkdirSync(logDir); // Création d'un nouveau dossier de logs

  if (fs.existsSync("./work")) {
    fs.rmSync("./work", { recursive: true }); // Suppression du dossier de travail existant
  }
  fs.mkdirSync("./work"); // Création d'un nouveau dossier de travail
}

// Gère les commandes de l'utilisateur
process.stdin.on("data", function (data) {
  const command = data.toString().trim();

  if (command.startsWith("part") || command.startsWith("p")) {
    const part = command.split(" ")[1];
    selectPart(part);
  } else if (command.startsWith("start") || command.startsWith("s")) {
    startTraining();
  } else if (command.startsWith("test") || command.startsWith("t")) {
    runTests();
  } else if (command.startsWith("log") || command.startsWith("l")) {
    displayLastLog();
  } else if (command.startsWith("exit")) {
    clean();
    process.exit(0);
  }
});

function getLatestLogFilePath() {
  const files = fs.readdirSync(logDir);
  const latestFile = files
    .map((file) => ({ file, mtime: fs.statSync(`${logDir}/${file}`).mtime }))
    .sort((a, b) => b.mtime - a.mtime)[0].file;

  return `${logDir}/${latestFile}`;
}

function clean() {
  const date = new Date();
  const formattedDate = date
    .toISOString()
    .split("T")[0]
    .replace(/-/g, "")
    .slice(4);
  const time = date.toTimeString().split(" ")[0].replace(/:/g, "");
  const sessionID = `${formattedDate}_${time}`;
  const duration = Math.round((Date.now() - chronoStart) / 60000);

  // Création du dossier d'archive pour la session actuelle
  const sessionDir = `./archives/${sessionID}`;
  if (!fs.existsSync("./archives")) {
    fs.mkdirSync("./archives");
  }
  fs.mkdirSync(sessionDir);
  fs.mkdirSync(`${sessionDir}/work`);
  fs.mkdirSync(`${sessionDir}/logs`);

  // Déplacement des fichiers de travail et de logs
  fs.renameSync("./work", `${sessionDir}/work`);
  fs.renameSync(logDir, `${sessionDir}/logs`);

  // Ajout du score à fichier des scores
  const scoreFile = "./scores.txt";

  fs.appendFileSync(
    scoreFile,
    `${sessionID}, part ${selectedPartNumber}: ${selectedPartName} - score: ${score} in ${duration}mns\n`
  );

  // Création de nouveaux dossiers de travail et de logs pour la session suivante
  initializeDirectory();

  console.log(
    chalk.yellow(
      `La session a été nettoyée et archivée sous l'ID de session : ${sessionID}`
    )
  );
}

function displayLastLog() {
  const logData = fs.readFileSync(getLatestLogFilePath(), "utf-8");
  console.log(logData);
}

console.log(
  chalk.cyan(
    "Entrez 'part n' pour choisir une partie\n('n': [1 - 7] | 'all')\n- 'start' pour commencer l'entraînement\n- 'test' pour tester votre solution."
  )
);
