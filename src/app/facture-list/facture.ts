export interface Facture {
    numCommande: number; 
    codeClient: number; 
    numTVA: number; 
    dateLivraison: Date; 
    codeProduit: number; 
    description: string; 
    quantite: number; 
    prixUnitaireHT: number; 
    tva: number; 
    dateEcheance: Date;
    remise: number; 
    accomptes: number;  
    ordredecommande: string; 

  }