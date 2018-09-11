import { PrestaState } from '../../shared/enums/presta-state.enum';
import { Prestation } from '../../shared/models/mprestation';

export const fakeCollection: Prestation[] = [new Prestation({
  id: 'a1',
  type_presta: 'Formation',
  type_client: 'Orange',
  nb_jours: 2,
  taux_tva: 20,
  tjm_ht: 500,
  state: PrestaState.CONFIRME
}),
new Prestation({
  id: 'a2',
  type_presta: 'Prestation',
  type_client: 'Modis',
  nb_jours: 5,
  taux_tva: 20,
  tjm_ht: 700,
  state: PrestaState.ANNULE
}),
new Prestation({
  id: 'a3',
  type_presta: 'Formation',
  type_client: 'Enedis',
  nb_jours: 3,
  taux_tva: 20,
  tjm_ht: 300,
  state: PrestaState.OPTION
})];
