// Point central du projet : c'est ici que tout démarre

// On importe la fonction qui initialise les événements
import { initialiserTaches } from './gestionTaches.js';

// On importe la fonction qui charge les tâches depuis le localStorage
import { chargerTaches } from './stockage.js';

// Quand la page est totalement chargée, on lance l'application
document.addEventListener('DOMContentLoaded', () => {
  initialiserTaches();  // On prépare les événements (bouton "Ajouter")
  chargerTaches();      // On affiche les tâches sauvegardées si elles existent
});
