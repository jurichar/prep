/**
 * Problème du sac à dos
 *
 * Trouver la valeur maximale qui peut être obtenue en remplissant un sac à dos de capacité W avec des objets ayant des poids et des valeurs donnés.
 *
 * Pseudo-code :
 * fonction knapsack(weights, values, W)
 *    si W est 0 ou si il n'y a pas d'objets
 *       retourner 0
 *    fin si
 *    si le poids de l'objet actuel est plus que W
 *       retourner knapsack avec les objets restants
 *    fin si
 *    retourner max(valeur actuelle + knapsack avec moins de poids, knapsack sans l'objet actuel)
 * fin fonction
 *
 * @param {number[]} weights - Les poids des objets
 * @param {number[]} values - Les valeurs des objets
 * @param {number} W - La capacité du sac à dos
 * @returns {number} - La valeur maximale obtenue
 */

export default function knapsack(weights, values, W) {
  // Votre code ici
}
