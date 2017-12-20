import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns = ['from', 'to', 'ammount', 'result'];
  dataSource = null;
  newExchange = {
    to: null,
    from: null,
    ammount: null
  };
  storageName = 'rates';
  userExchanges = [];
  currencies = ['BTC', 'ETH', 'LTC', 'EUR', 'GBP', 'USD', 'AUD', 'CAD', 'CZK', 'DKK', 'HKD', 'HUF', 'ILS', 'JPY',
    'MXN', 'NZD', 'NOK', 'PLN', 'RON', 'SGD', 'ZAR', 'SEK', 'CHF', 'THB', 'TRY', 'AED', 'BGN', 'SAR', 'QAR'];

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    this.loadRates();
    this.httpRequest();
  }
  httpRequest() {
    const x = this.http.get('https://cors-anywhere.herokuapp.com/https://www.revolut.com/api/quote/internal/BTCGBP')
      .map((res: Response) => res.json());
    Observable.forkJoin([x])
      .subscribe(data => {
        console.log('yyyy', data);
      });
  }
  loadRates() {
    this.dataSource = null;
    let displayRates: Rate[] = [];
    this.loadFromStorage();
    displayRates = this.userExchanges.map(ex => {
      return {
        ammount: ex.ammount,
        to: ex.to,
        from: ex.from,
        result: 0
      };
    });
    this.dataSource = new MatTableDataSource<Rate>(displayRates);
  }
  add() {
    if (!this.newExchange.from || !this.newExchange.to || !this.newExchange.ammount) {
      return;
    }
    this.userExchanges.push(Object.assign({}, this.newExchange));
    this.newExchange = {
      to: null,
      from: null,
      ammount: null
    };
    this.saveToStorage();
  }
  clear() {
    localStorage.removeItem(this.storageName);
    this.loadRates();
  }
  saveToStorage() {
    localStorage.setItem(this.storageName, JSON.stringify(this.userExchanges));
    this.loadRates();
  }
  loadFromStorage() {
    const data = localStorage.getItem(this.storageName);
    if (data) {
      this.userExchanges = JSON.parse(data);
    } else {
      this.userExchanges = [];
    }
  }
}

export interface Rate {
  from: string;
  to: string;
  ammount: number;
  result: number;
}
