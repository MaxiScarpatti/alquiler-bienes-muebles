import { Component } from '@angular/core';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  currentAdmin = {
    id: "#01", firstName: "Fernando", lastName: "Valverde"
  };
  
  tables = {
    none: 0, catalogue: 1, sellers: 2, clients: 3
  };

  currentTable = this.tables.none;
  
  ShowTable(tableIndex: number): void {
    this.currentTable = tableIndex;
  }  
//Objetos temporales para visualizar mejor las tablas:
  catalogue = [
    { id: "p28", name: "silla para jardín", description: "silla blanca de plastico", price: 100 },
    { id: "p29", name: "mesa para jardín", description: "mesa blanca de plastico", price: 250 },
    { id: "p30", name: "holla de cocina", description: "holla metálica para horno", price: 40 },    
  ];
  
  sellers = [
    { id: "v21", name: "Juan Perez" },
    { id: "v22", name: "Luis Sanchez" },
    { id: "v23", name: "Mariela Ruiz" }
  ];

  clients = [
    { id: "c02", name: "Micaela Vargas" },
    { id: "c03", name: "Giancarlo Vera" },
    { id: "c04", name: "Lucas Fernandez" }
  ];

}
