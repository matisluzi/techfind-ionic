import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit {

  @Input() productType: String;
  @Input() products: Product[];
  @Input() ascDesc: number;
  @Input() property: string;

  productsFiltered: Product[];

  constructor() {}

  ngOnInit() {
    this.productsFiltered = this.products.filter((product: Product) => product.type === this.productType);
  }

}
