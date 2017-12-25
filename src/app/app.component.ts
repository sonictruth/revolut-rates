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
  demoData = [{
    'id': '08600f28-265e-a68f-51a8-411f584dc21a',
    'to': 'BTC', 'from': 'EUR',
    'amount': 0.035,
    'cost': 413.8
  },
  {
    'id': '27e794d6-08ce-1ece-b2df-b914af23116e',
    'to': 'BTC',
    'from': 'EUR',
    'amount': 0.035, 'cost': 500.33
  },
  {
    'id': 'b2dc3621-6118-632a-c908-3796fb62a8c7',
    'to': 'ETH', 'from': 'EUR', 'amount': 0.35, 'cost': 197.58
  },
  {
    'id': '2d3a1f25-8e03-2168-e5f0-b84e4fd9cf5f',
    'to': 'LTC', 'from': 'EUR', 'amount': 0.6084936, 'cost': 150
  },
  {
    'id': '05fa4779-72ed-94e5-faec-7cb9477b9024', 'to': 'LTC', 'from': 'EUR',
    'amount': 0.17823969, 'cost': 50
  }];
  loading = false;
  displayedColumns = ['amount', 'results', 'direction', 'action'];
  dataSource = null;
  newPortofolioItem = {
    to: null,
    from: null,
    amount: null,
    cost: null,
  };
  storageName = 'rates';
  portofolioItems = [];
  total;
  currencies = ['BTC', 'ETH', 'LTC', 'EUR', 'GBP', 'USD', 'AUD', 'CAD', 'CZK', 'DKK', 'HKD', 'HUF', 'ILS', 'JPY',
    'MXN', 'NZD', 'NOK', 'PLN', 'RON', 'SGD', 'ZAR', 'SEK', 'CHF', 'THB', 'TRY', 'AED', 'BGN', 'SAR', 'QAR'];

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    this.loadRates();
  }
  loadRates() {
    this.dataSource = null;
    this.loadFromStorage();
    const exchangePairs = this.portofolioItems.reduce((acc, cur) => {
      acc[`${cur.to}${cur.from}`] = 0;
      return acc;
    }, {});

    if (this.portofolioItems.length === 0) {
      return;
    }
    this.loading = true;

    const obs = Object.keys(exchangePairs).map(exchangePair =>
      this.http.get(
        `https://cors-anywhere.herokuapp.com/https://www.revolut.com/api/quote/internal/${exchangePair}`
      ).map((res: Response) => res.json())
    );

    Observable.forkJoin(obs)
      .subscribe(exchangeRates => {
        exchangeRates.forEach(exchangeRate => {
          exchangePairs[`${exchangeRate.from}${exchangeRate.to}`] = exchangeRate.rate;
        });
        let total = 0;
        const displayItems = this.portofolioItems.map(portofolioItem => {
          const displayItem = { ...portofolioItem };
          const rateNow = exchangePairs[`${portofolioItem.to}${portofolioItem.from}`];
          const rateThen = portofolioItem.cost / portofolioItem.amount;
          const rateDiff = rateNow - rateThen;
          const valueNow = portofolioItem.amount * rateNow;
          const valueDiff = valueNow - portofolioItem.cost;
          displayItem.ammount = displayItem.amount.toFixed(2);
          displayItem.rateNow = rateNow.toFixed(2);
          displayItem.rateThen = rateThen.toFixed(2);
          displayItem.rateDiff = rateDiff.toFixed(2);
          displayItem.valueNow = valueNow.toFixed(2);
          displayItem.diff = valueNow.toFixed(2);
          displayItem.valueDiff = valueDiff.toFixed(2);
          displayItem.winning = (rateDiff > 0);
          total = (total + valueDiff);
          return displayItem;
        });
        this.total = total.toFixed(2);
        this.dataSource = new MatTableDataSource(displayItems);
        this.loading = false;
      });
  }
  addPortofolioItem() {
    if (!this.newPortofolioItem.from ||
      !this.newPortofolioItem.to ||
      !this.newPortofolioItem.amount ||
      !this.newPortofolioItem.cost) {
      return;
    }
    this.portofolioItems.push(Object.assign({ id: this.guid() }, this.newPortofolioItem));
    this.newPortofolioItem = {
      to: null,
      from: null,
      amount: null,
      cost: null
    };
    this.saveToStorage();
  }
  removePortofolioItem(id) {
    this.portofolioItems = this.portofolioItems.filter(item => item.id !== id);
    this.saveToStorage();
  }
  clearStorage() {
    localStorage.removeItem(this.storageName);
    this.loadRates();
  }
  loadDemo() {
    this.portofolioItems = this.demoData;
    localStorage.setItem(this.storageName, JSON.stringify(this.portofolioItems));
    this.loadRates();
  }
  saveToStorage() {
    localStorage.setItem(this.storageName, JSON.stringify(this.portofolioItems));
    this.loadRates();
  }
  loadFromStorage() {
    const data = localStorage.getItem(this.storageName);
    if (data) {
      this.portofolioItems = JSON.parse(data);
    } else {
      this.portofolioItems = [];
    }
  }
  filter(currencies, keyword) {
    if (!keyword) {
      return currencies;
    }
    return currencies.filter(c => c !== keyword);
  }
  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
}


