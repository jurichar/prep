/**
 * Recherche binaire
 *
 * Utilise le principe de division pour chercher un élément dans un tableau trié.
 * Divise le tableau en deux à chaque itération jusqu'à ce que l'élément soit trouvé ou que la taille du tableau soit 0.
 *
 * Pseudo-code :
 * Tant que la taille du tableau est supérieure à 0
 *    Trouver l'index du milieu du tableau
 *    si tableau[indexMilieu] est égal à valeur
 *       retourner indexMilieu
 *    sinon si tableau[indexMilieu] < valeur
 *       chercher dans la moitié droite du tableau
 *    sinon
 *       chercher dans la moitié gauche du tableau
 *    fin si
 * Fin Tant que
 * retourner -1
 *
 * @param {number[]} arr - Le tableau
 * @param {number} val - La valeur à rechercher
 * @returns {number} - L'index de la valeur ou -1 si non trouvée
 */

export default function binarySearch(arr) {
  // Votre code ici
}
