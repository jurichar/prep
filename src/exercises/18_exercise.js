/**
 * Suite de Fibonacci avec mémoïsation
 *
 * Calculer le nth terme de la suite de Fibonacci en utilisant la mémoïsation pour éviter des calculs redondants.
 *
 * Pseudo-code :
 * fonction fib(n, memo = {})
 *    si n est dans memo
 *       retourner memo[n]
 *    fin si
 *    si n est 0 ou 1
 *       retourner n
 *    fin si
 *    memo[n] = fib(n-1, memo) + fib(n-2, memo)
 *    retourner memo[n]
 * fin fonction
 *
 * @param {number} n - Le terme à calculer
 * @param {Object} memo - Un objet pour stocker les résultats intermédiaires
 * @returns {number} - Le nth terme de la suite de Fibonacci
 */

export default function fibMemoization(n, memo = {}) {
  // Votre code ici
}
