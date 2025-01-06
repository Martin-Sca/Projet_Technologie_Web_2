import { PiloteController } from "../src/controllers/piloteController";
import { Pilote } from "../src/models/pilotes";

test("charger les pilotes", () => {
  const pilotes = PiloteController.chargerPilotes();
  expect(pilotes.length).toBeGreaterThan(0);
});

test("trier par âge", () => {
  const pilotes = [
    new Pilote("A", 30, "Pays A", "Écurie A", 5, ""),
    new Pilote("B", 20, "Pays B", "Écurie B", 10, "")
  ];
  const result = PiloteController.trierParAge(pilotes);
  expect(result[0].age).toBe(20);
});