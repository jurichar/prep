/**
 * Calcul du plus long sous-ensemble commun
 *
 * Trouver la longueur du plus long sous-ensemble commun entre deux chaînes de caractères.
 *
 * Pseudo-code :
 * fonction lcs(X, Y, m, n)
 *    si m est 0 ou n est 0
 *       retourner 0
 *    fin si
 *    si X[m-1] est égal à Y[n-1]
 *       retourner 1 + lcs(X, Y, m-1, n-1)
 *    fin si
 *    retourner max(lcs(X, Y, m, n-1), lcs(X, Y, m-1, n))
 * fin fonction
 *
 * @param {string} X - La première chaîne
 * @param {string} Y - La seconde chaîne
 * @param {number} m - La longueur de X
 * @param {number} n - La longueur de Y
 * @returns {number} - La longueur du plus long sous-ensemble commun
 */

export default function longestCommonSubsequence(X, Y, m, n) {
  // Votre code ici
}
