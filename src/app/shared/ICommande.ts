
import { Produit } from './IProduit';


export interface Commande {

    id : number;
    
    coupeEnBout : boolean;
    thermo : boolean;
    emplDbl : boolean;
    thermoType : string;
    faconnier : string;
    societe : string;
    receptionneur : string;
    date: String;
    fabricant : string;
    modele : string;   
    ListProduits : Produit[];

}