import { Commande } from './ICommande';

export interface Facture {
    numCommande: number;
    date: Date;
    dateEcheance: Date;
    modeReglement: string;
    numTVA: number;
    dateLivraison: Date;
    tva: number;
    remise: number;
    acomptes: number;
    montantEcheance: number;
    escompte: number;
    ordredecommande: Commande;


}