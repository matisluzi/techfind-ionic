import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { ProductCardComponent } from '../product-card/product-card.component';
import { CardViewComponent } from '../card-view/card-view.component';

import { SortByPipe } from '../sort-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ProductCardComponent, CardViewComponent, SortByPipe]
})
export class HomePageModule {}
