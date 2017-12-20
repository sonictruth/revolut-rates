import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading = false;
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
  }
  loadRates() {
    this.loading = true;
    this.dataSource = null;
    this.loadFromStorage();
    const obs = this.userExchanges.map(ue =>
      Observable.forkJoin([Observable.of(ue), this.http.get(
        `https://cors-anywhere.herokuapp.com/https://www.revolut.com/api/quote/internal/${ue.from}${ue.to}`
      ).map((res: Response) => res.json())])
    );
    if (obs.length === 0) {
      this.loading = false;
    }
    Observable.forkJoin(obs)
      .subscribe(data => {
        const displayRates = data.map(d => {
          d[0].result = d[0].ammount * d[1].rate;
          return d[0];
        });
        this.dataSource = new MatTableDataSource<Rate>(displayRates);
        this.loading = false;
      });
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
  filter(currencies, keyword) {
    if (!keyword) {
      return currencies;
    }
    return currencies.filter( c => c !== keyword);
  }
}

export interface Rate {
  from: string;
  to: string;
  ammount: number;
  result: number;
}
