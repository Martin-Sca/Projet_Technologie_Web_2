"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var piloteController_1 = require("../controllers/piloteController");
var pilotes = piloteController_1.PiloteController.chargerPilotes();
function afficherPilotes(pilotes) {
    var container = document.getElementById("pilotes-list");
    if (container) {
        container.innerHTML = pilotes
            .map(function (p) { return "\n        <div class=\"pilote-card\">\n          <img src=\"".concat(p.image, "\" alt=\"").concat(p.nom, "\" style=\"width:100%; height:auto;\" />\n          <h3>").concat(p.nom, "</h3>\n          <p>\u00C2ge: ").concat(p.age, "</p>\n          <p>\u00C9curie: ").concat(p.ecurie, "</p>\n          <p>Victoires: ").concat(p.victoires, "</p>\n        </div>"); })
            .join("");
    }
}
afficherPilotes(pilotes);
