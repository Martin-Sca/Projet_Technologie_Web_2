"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PiloteController = void 0;
var pilotes_1 = require("../models/pilotes");
var fs = require("fs");
var PiloteController = /** @class */ (function () {
    function PiloteController() {
    }
    PiloteController.chargerPilotes = function () {
        var data = fs.readFileSync("src/data/pilotes.json", "utf-8");
        var pilotes = JSON.parse(data);
        return pilotes.map(function (p) {
            return new pilotes_1.Pilote(p.nom, p.age, p.nationalite, p.ecurie, p.victoires, p.image);
        });
    };
    PiloteController.ajouterPilote = function (pilotes, nouveauPilote) {
        pilotes.push(nouveauPilote);
        return pilotes;
    };
    PiloteController.trierParAge = function (pilotes) {
        return pilotes.sort(function (a, b) { return a.age - b.age; });
    };
    PiloteController.trierParVictoires = function (pilotes) {
        return pilotes.sort(function (a, b) { return b.victoires - a.victoires; });
    };
    return PiloteController;
}());
exports.PiloteController = PiloteController;
