import { IProduit } from './IProduit';
export interface ICommande {
    id: number;
    coupeEnBout: boolean;
    thermo : boolean;
    empdbl: boolean;
    thermoType: string;
    faconnier:string;
    societe: string;
    receptionneur: string;
    fabricant: string;
    modele: string;
    date: String;
    produits : IProduit[];

}