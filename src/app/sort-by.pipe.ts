import { Pipe, PipeTransform } from '@angular/core';
import { Product } from "./products";

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: Product[], property: string, ascDesc: number): Product[] {
    switch (property) {
      case 'company':
        return value.sort(function (a, b) {
          return ('' + a.company).localeCompare(b.company);
        })
      case 'name':
        return value.sort(function (a, b) {
          return ('' + a.name).localeCompare(b.name);
        })
      case 'price':
        switch (ascDesc) {
          case 1:
            return value.sort((a, b) => parseInt(a.price) - parseInt(b.price))
          case -1:
            return value.sort((a, b) => parseInt(b.price) - parseInt(a.price))
        }
    }
  }

}
