import { Pilote } from "../models/pilotes";
import * as fs from "fs";

export class PiloteController {
  static chargerPilotes(): Pilote[] {
    const data = fs.readFileSync("src/data/pilotes.json", "utf-8");
    const pilotes = JSON.parse(data);
    return pilotes.map(
      (p: any) =>
        new Pilote(p.nom, p.age, p.nationalite, p.ecurie, p.victoires, p.image)
    );
  }

  static ajouterPilote(pilotes: Pilote[], nouveauPilote: Pilote): Pilote[] {
    pilotes.push(nouveauPilote);
    return pilotes;
  }

  static trierParAge(pilotes: Pilote[]): Pilote[] {
    return pilotes.sort((a, b) => a.age - b.age);
  }

  static trierParVictoires(pilotes: Pilote[]): Pilote[] {
    return pilotes.sort((a, b) => b.victoires - a.victoires);
  }
}