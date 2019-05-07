import { Produit } from './IProduit';


export interface Commande {

    commandeId : number;
    
    commandeCoupeEnBout : boolean;
    commandeThermo : boolean;
    commandeEmplDbl : boolean;
    commandeThermoType : string;
    commandeFaconnier : string;
    commandeSociete : string;
    commandeReceptionneur : string;

    commandeFabricant : string;
    commandeModele : string;
    
    ListeProduits : Produit;

}