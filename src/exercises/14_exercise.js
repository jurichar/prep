/**
 * Algorithme de Kruskal
 *
 * Trouve un arbre couvrant minimum dans un graphe pondéré connecté.
 *
 * Pseudo-code :
 * fonction kruskal(graphe)
 *    initialiser une forêt comme un ensemble disjoint
 *    initialiser une file de priorité et y ajouter toutes les arêtes du graphe
 *    tant que la file de priorité n'est pas vide
 *       retirer l'arête avec le poids le plus petit
 *       si l'arête connecte deux arbres différents
 *          ajouter l'arête à l'arbre couvrant minimum
 *          fusionner les deux arbres
 *       fin si
 *    fin tant que
 *    retourner l'arbre couvrant minimum
 * fin fonction
 *
 * @param {Graph} graph - Le graphe
 * @returns {Graph} - Un arbre couvrant minimum
 */

export default function kruskal(graph) {
  // Votre code ici
}
