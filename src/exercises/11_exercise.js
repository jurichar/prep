/**
 * Parcours en profondeur (DFS)
 *
 * Ce parcours explore aussi loin que possible le long de chaque branche avant de revenir en arrière.
 *
 * Pseudo-code :
 * fonction DFS(noeud, visité)
 *    si noeud est null
 *       retourner
 *    fin si
 *    marquer noeud comme visité
 *    pour chaque voisin de noeud
 *       si voisin n'est pas visité
 *          DFS(voisin, visité)
 *       fin si
 *    fin pour
 * fin fonction
 *
 * @param {Node} node - Le nœud de départ
 * @param {Set} visited - Un ensemble pour suivre les nœuds visités
 */

export default function depthFirstSearch(node, visited = new Set()) {
  // Votre code ici
}
