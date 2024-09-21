import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Stock } from '../models/stock';

@Component({
  selector: 'app-search-pipe-impl',
  templateUrl: './search-pipe-impl.component.html',
  styleUrls: ['./search-pipe-impl.component.css']
})
export class SearchPipeImplComponent {
  allStocks:any;
  stocks: any;
  searchStock!: string;

  constructor(private http: HttpClient){
    this.searchStock = '';
  }
  

  // org url : https://www.alphavantage.co/query?function=HISTORICAL_OPTIONS&symbol=IBM&apikey=A86BQ1FO19SO1DWV
  // db url: http://ANKITs-MacBook-Air.local:3000/stocks
  ngOnInit() { 
    this.http.get('http://ANKITs-MacBook-Air.local:3000/stocks', 
      { headers: { 'Accept': 'application/json', 'User-Agent': 'request' }}).subscribe(responsePayload => {
        this.stocks = responsePayload;
        //this.dataManipulation(); // Call data manipulation after data is fetched
      });
  }
  
  dataManipulation() {
    // Ensure that data exists before trying to access it
    if (this.allStocks && this.allStocks.data) {
      this.stocks = this.allStocks.data;
      console.log(this.stocks);
    } else {
      console.error('No data found in response payload');
    }
  }

}
