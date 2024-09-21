import { Pipe, PipeTransform } from '@angular/core';
import { Stock } from '../models/stock';



//wildcard serach
@Pipe({
  name: 'searchPipe',
})
export class SearchPipePipe implements PipeTransform {

  transform(stocks: Stock[], seachedStock: string): Stock[] {
    if(stocks.length === 0 || seachedStock == '' || seachedStock == undefined) return stocks;
    const filteredStock = stocks.filter(stock => stock.contractID?.toLocaleLowerCase().match(seachedStock.toLocaleLowerCase()));
    return filteredStock;
  }
}


