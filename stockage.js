// On récupère l'endroit où les tâches sont affichées
let liste = document.getElementById('listeTaches');

// Fonction qui enregistre les tâches dans le navigateur (localStorage)
export function sauvegarderTaches() {
  let taches = [];

  // On parcourt toutes les tâches affichées pour les enregistrer
  liste.querySelectorAll('.tache .texte').forEach(item => {
    taches.push(item.textContent);  // On récupère juste le texte de chaque tâche
  });

  // On convertit le tableau en chaîne JSON et on le stocke
  localStorage.setItem('mesTaches', JSON.stringify(taches));
}

// Fonction qui charge les tâches depuis le localStorage au démarrage
export function chargerTaches() {
  let donnees = localStorage.getItem('mesTaches');

  if (donnees) {
    // On transforme la chaîne JSON en tableau JS
    let taches = JSON.parse(donnees);

    // Pour chaque tâche sauvegardée, on la recrée dans l'interface
    taches.forEach(texte => {
      let template = document.getElementById('template-tache');
      let clone = template.content.cloneNode(true);
      clone.querySelector('.texte').textContent = texte;

      // On remet aussi l'événement de suppression
      clone.querySelector('.supprimer').addEventListener('click', (e) => {
        e.target.parentElement.remove();
        sauvegarderTaches();
      });

      liste.appendChild(clone);
    });
  }
}