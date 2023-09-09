/**
 * Algorithme de Dijkstra
 *
 * Trouve le chemin le plus court entre un nœud de départ et tous les autres nœuds dans un graphe pondéré.
 *
 * Pseudo-code :
 * fonction dijkstra(graphe, source)
 *    initialiser une file de priorité
 *    initialiser des distances à l'infini
 *    définir la distance de la source à 0
 *    ajouter la source à la file de priorité
 *    tant que la file de priorité n'est pas vide
 *       nœud = file de priorité.retirer()
 *       pour chaque voisin de nœud
 *          si la distance à travers nœud est plus petite
 *             mettre à jour la distance
 *             ajouter le voisin à la file de priorité
 *          fin si
 *       fin pour
 *    fin tant que
 *    retourner les distances
 * fin fonction
 *
 * @param {Graph} graph - Le graphe
 * @param {Node} source - Le nœud de départ
 * @returns {Object} - Les distances les plus courtes à chaque nœud
 */

export default function dijkstra(graph, source) {
  // Votre code ici
}
