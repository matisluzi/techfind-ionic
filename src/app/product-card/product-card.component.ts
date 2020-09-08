import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser/ngx";
import { Product } from '../products';
import {  } from '../home/home.page';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  
  @Input() product: Product;

  constructor(private iab: InAppBrowser) { }

  options: InAppBrowserOptions = {
    toolbarposition: 'top',
    lefttoright: 'yes',
    allowInlineMediaPlayback: 'yes',
    location: 'no',
  };

  cardClick(url) {
    this.iab.create(url, "_blank", this.options);
  }

  ngOnInit() {
    
  }

}
