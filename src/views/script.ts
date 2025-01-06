import { PiloteController } from "../controllers/piloteController";

const pilotes = PiloteController.chargerPilotes();

function afficherPilotes(pilotes: any[]) {
  const container = document.getElementById("pilotes-list");
  if (container) {
    container.innerHTML = pilotes
      .map(
        (p) => `
        <div class="pilote-card">
          <img src="${p.image}" alt="${p.nom}" style="width:100%; height:auto;" />
          <h3>${p.nom}</h3>
          <p>Âge: ${p.age}</p>
          <p>Écurie: ${p.ecurie}</p>
          <p>Victoires: ${p.victoires}</p>
        </div>`
      )
      .join("");
  }
}

afficherPilotes(pilotes);