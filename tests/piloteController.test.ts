import { PiloteController } from "../src/controllers/piloteController";
import { Pilote } from "../src/models/pilotes";

test("charger les pilotes", () => {
  const pilotes = PiloteController.chargerPilotes();
  expect(pilotes.length).toBeGreaterThan(0);
});

test("ajouter un pilote", () => {
  const pilotes: Pilote[] = [];
  const nouveauPilote = new Pilote("Charles Leclerc", 26, "Monégasque", "Ferrari", 5);
  PiloteController.ajouterPilote(pilotes, nouveauPilote);
  expect(pilotes.length).toBe(1);
  expect(pilotes[0].nom).toBe("Charles Leclerc");
});

test("trier par âge", () => {
  const pilotes = [
    new Pilote("Pilote A", 30, "Pays A", "Écurie A", 5),
    new Pilote("Pilote B", 20, "Pays B", "Écurie B", 3)
  ];
  const result = PiloteController.trierParAge(pilotes);
  expect(result[0].age).toBe(20);
});

test("trier par victoires", () => {
  const pilotes = [
    new Pilote("Pilote A", 30, "Pays A", "Écurie A", 5),
    new Pilote("Pilote B", 20, "Pays B", "Écurie B", 10)
  ];
  const result = PiloteController.trierParVictoires(pilotes);
  expect(result[0].victoires).toBe(10);
});