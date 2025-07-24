// On importe la fonction qui permet de sauvegarder les tâches dans le localStorage
import { sauvegarderTaches } from './stockage.js';

// On récupère les éléments HTML
let boutonAjouter = document.getElementById('ajouterBtn');
let inputTache = document.getElementById('nouvelleTache');
let liste = document.getElementById('listeTaches');
let template = document.getElementById('template-tache');

// Fonction appelée au démarrage
export function initialiserTaches() {
  boutonAjouter.addEventListener('click', ajouterTache);
}

// Fonction qui ajoute une tâche
function ajouterTache() {
  let texte = inputTache.value.trim();

  if (texte !== "") {
    let clone = template.content.cloneNode(true);

    // Insérer le texte
    let spanTexte = clone.querySelector('.texte');
    spanTexte.textContent = texte;

      // Générer la date/heure actuelle
    let maintenant = new Date();
    let dateFormatee = maintenant.toLocaleString(); // ex: "22/07/2025, 14:30:00"

    // Insérer la date/heure
    let spanDate = clone.querySelector('.date');
    spanDate.textContent = ` (${dateFormatee}) `;
    spanDate.style.fontSize = "0.8em";
    spanDate.style.color = "black";
    spanDate.style.marginLeft = "10px";


    // Bouton Supprimer
    clone.querySelector('.supprimer').addEventListener('click', (e) => {
      e.target.parentElement.remove();
      sauvegarderTaches();
    });

    // Bouton Terminé
    clone.querySelector('.fini').addEventListener('click', (e) => {
      spanTexte.style.textDecoration = "line-through";  // barrer le texte
      spanTexte.style.color = "grey";                   // griser
      e.target.style.backgroundColor = "gold";         // bouton vert
    });

    // Ajouter à la liste
    liste.appendChild(clone);

    // Vider l'input
    inputTache.value = "";

    // Sauvegarder
    sauvegarderTaches();
  } else {
    alert("Veuillez entrer une tâche !");
  }
}

let bouton = document.getElementById('theme');
let pres = document.body;

bouton.addEventListener('click', () => {
  if (pres.classList.contains('themeClair')) {
    pres.classList.remove('themeClair');
    pres.classList.add('themeSombre');
  } else {
    pres.classList.remove('themeSombre');
    pres.classList.add('themeClair');
  }
});

