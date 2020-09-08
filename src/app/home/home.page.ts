import { Component, NgZone } from '@angular/core';
import { Product } from '../products';
import { HttpClient } from '@angular/common/http';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  // arrays which store products & types
  products: Product[] = []
  productTypes: String[] = []

  // sorting variables
  ascDesc: number = 1;
  property: string = 'company';

  // read data from csv file
  readCsvData() {
    this.http.get('assets/db.csv', {
      responseType: 'text',
    }).subscribe(data => {
      this.csvToArray(data);
    })
  }

  // store data in 'products' array
  csvToArray(data) {
    var rows = data.split("\r\n");
    var strings = "";
    rows.splice(0, 1);
    rows = rows.filter(a => a !== ",,,,");
    for (const row of rows) {
      strings = row.split(",");
      // run with ngZone to refresh UI
      this.ngZone.run(() => {
        this.products.push({
          type: strings[0],
          name: strings[1],
          company: strings[2],
          price: strings[3],
          url: strings[4],
        });

        this.productTypes = this.products.map(e => e.type).filter(function (elem, index, self) {
          return index === self.indexOf(elem);
        })
      });
    }
  }

  // show sorting action sheet
  async presentSortingActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Sort by',
      buttons: [{
        text: 'Company Name - Alphabetically',
        handler: () => {
          this.sortProducts(1)
        }
      }, {
        text: 'Product Name - Alphabetically',
        handler: () => {
          this.sortProducts(2)
        }
      }, {
        text: 'Price - Ascending',
        handler: () => {
          this.sortProducts(3)
        }
      }, {
        text: 'Price - Descending',
        handler: () => {
          this.sortProducts(4)
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
      }]
    });
    await actionSheet.present();
  }

  // sorting products function
  sortProducts(type) {
    switch (type) {
      case 1:
        this.property = 'company';
        this.ascDesc = 1;
        break;
      case 2:
        this.property = 'name';
        this.ascDesc = 1;
        break;
      case 3:
        this.property = 'price';
        this.ascDesc = 1;
        break;
      case 4:
        this.property = 'price';
        this.ascDesc = -1;
        break;
    
    }
  }

  // code that runs when app runs
  ngOnInit() {
    this.readCsvData();
  }

  constructor(private http: HttpClient, private ngZone: NgZone, public actionSheetController: ActionSheetController) { }

}
