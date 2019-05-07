import { Component, OnInit } from '@angular/core';
import { Commande } from '../shared/ICommande';
import { Produit } from '../shared/IProduit';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commande-detail',
  templateUrl: './commande-detail.component.html',
  styleUrls: ['./commande-detail.component.css']
})
export class CommandeDetailComponent implements OnInit {
  pageTitle = 'Détail commande'
 


  id: number;
  commande : Commande;

 

  constructor(private route: ActivatedRoute,private router: Router) { 
    

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }
  onBack(): void {
    this.router.navigate(['/products']);
}

}
