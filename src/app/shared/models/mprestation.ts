
import { Iprestation } from '../interfaces/iprestation';
import { PrestaState } from '../enums/presta-state.enum';

export class Prestation implements Iprestation {
  id: string;
  type_presta: string;
  type_client: string;
  nb_jours: number;
  taux_tva = 20;
  tjm_ht: number;
  state = PrestaState.OPTION;

  // Instanciate model with incomplete attributes
  constructor(fields?: Partial<Prestation>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

  totalHT(): number {
    if (!this.nb_jours || !this.tjm_ht) {
      return 0;
    }
    return this.nb_jours * this.tjm_ht;
  }

  totalTTC(tva?: number): number {
    const totalHT = this.totalHT();
    if (!tva) {
      tva = this.taux_tva ? this.taux_tva : 0;
    } else if (tva <= 0) {
      tva = 0;
    }
    return totalHT + (tva * totalHT / 100);
  }
}
