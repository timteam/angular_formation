import { PrestaState } from '../enums/presta-state.enum';

export interface Iprestation {
    id: string;
    type_presta: string;
    type_client: string;
    nb_jours: number;
    taux_tva: number;
    tjm_ht: number;
    state: PrestaState;
}
