/**
 * Problème des N reines
 *
 * Trouver toutes les manières de placer N reines sur un échiquier de NxN de sorte qu'aucune ne se menace mutuellement.
 *
 * Pseudo-code :
 * fonction nQueens(n, board = [], row = 0)
 *    si row est égale à n
 *       ajouter la solution au résultat
 *       retourner
 *    fin si
 *    pour chaque colonne de 0 à n-1
 *       si l'emplacement est sûr
 *          placer une reine
 *          nQueens(n, board, row+1)
 *          retirer la reine
 *       fin si
 *    fin pour
 * fin fonction
 *
 * @param {number} n - La taille de l'échiquier
 * @returns {number[][]} - Les solutions possibles
 */

export default function nQueens(n) {
  // Votre code ici
}
