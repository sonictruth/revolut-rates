webpackJsonp([1],{0:function(e,t,n){e.exports=n("cDNt")},YuZA:function(e,t){function n(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="YuZA"},cDNt:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("LMZF"),a=n("x8Hs"),r=n("RyBE"),l=n("MCDL"),c=n("6lRS"),i=n("TMwh"),m=(n("GQSG"),n("rLWf"),n("HECM"),n("AP4T")),s=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,l=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l},u=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(){function e(e){this.http=e,this.loading=!1,this.displayedColumns=["from","to","amount","result"],this.dataSource=null,this.newExchange={to:null,from:null,amount:null},this.storageName="rates",this.userExchanges=[],this.currencies=["BTC","ETH","LTC","EUR","GBP","USD","AUD","CAD","CZK","DKK","HKD","HUF","ILS","JPY","MXN","NZD","NOK","PLN","RON","SGD","ZAR","SEK","CHF","THB","TRY","AED","BGN","SAR","QAR"]}return e.prototype.ngOnInit=function(){this.loadRates()},e.prototype.loadRates=function(){var e=this;this.loading=!0,this.dataSource=null,this.loadFromStorage();var t=this.userExchanges.map(function(t){return m.a.forkJoin([m.a.of(t),e.http.get("https://cors-anywhere.herokuapp.com/https://www.revolut.com/api/quote/internal/"+t.from+t.to).map(function(e){return e.json()})])});0===t.length&&(this.loading=!1),m.a.forkJoin(t).subscribe(function(t){var n=t.map(function(e){return e[0].result=(e[0].amount*e[1].rate).toFixed(2),e[0]});e.dataSource=new c.B(n),e.loading=!1})},e.prototype.add=function(){this.newExchange.from&&this.newExchange.to&&this.newExchange.amount&&(this.userExchanges.push(Object.assign({},this.newExchange)),this.newExchange={to:null,from:null,amount:null},this.saveToStorage())},e.prototype.clear=function(){localStorage.removeItem(this.storageName),this.loadRates()},e.prototype.saveToStorage=function(){localStorage.setItem(this.storageName,JSON.stringify(this.userExchanges)),this.loadRates()},e.prototype.loadFromStorage=function(){var e=localStorage.getItem(this.storageName);this.userExchanges=e?JSON.parse(e):[]},e.prototype.filter=function(e,t){return t?e.filter(function(e){return e!==t}):e},e=s([Object(o.m)({selector:"app-root",template:n("efyd"),styles:[n("hxJY")]}),u("design:paramtypes",[i.a])],e)}(),d=n("0nO6"),p=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,l=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l},h=function(){function e(){}return e=p([Object(o.H)({imports:[c.a,c.b,c.c,c.d,c.e,c.f,c.g,c.h,c.i,c.j,c.k,c.l,c.m,c.n,c.o,c.p,c.q,c.r,c.s,c.t,c.u,c.v,c.x,c.w,c.y,c.z,c.C,c.D,c.E,c.F,c.A],exports:[c.a,c.b,c.c,c.d,c.e,c.f,c.g,c.h,c.i,c.j,c.k,c.l,c.m,c.n,c.o,c.p,c.q,c.r,c.s,c.t,c.u,c.v,c.x,c.w,c.y,c.z,c.C,c.D,c.E,c.F,c.A]})],e)}(),g=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,l=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l},b=function(){function e(){}return e=g([Object(o.H)({declarations:[f],imports:[r.a,d.c,d.h,i.b,l.a,h],providers:[],bootstrap:[f]})],e)}();Object(o._12)(),Object(a.a)().bootstrapModule(b).catch(function(e){return console.log(e)})},efyd:function(e,t){e.exports='<div>\n  <mat-toolbar color="primary">\n    <span>Revolut Exchange Rates\n      <button (click)="loadRates()" mat-icon-button color="secondary">\n        <mat-icon>refresh</mat-icon>\n      </button>\n    </span>\n  </mat-toolbar>\n\n  <mat-progress-bar *ngIf=\'loading\' mode="indeterminate"></mat-progress-bar>\n\n  <mat-accordion>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Add exchange rate\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <div class="form-container">\n        <mat-form-field>\n          <input matInput type="number" placeholder="Amount" [(ngModel)]="newExchange.amount">\n        </mat-form-field>\n        <mat-form-field>\n          <mat-select placeholder="From" [(value)]="newExchange.from">\n            <mat-option *ngFor="let currency of filter(currencies, newExchange.to)" [value]="currency">\n              {{ currency }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field>\n          <mat-select placeholder="To" [(value)]="newExchange.to">\n            <mat-option *ngFor="let currency of filter(currencies, newExchange.from)" [value]="currency">\n              {{ currency }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div>\n          <button (click)="add()" mat-icon-button color="primary">\n            <mat-icon>add</mat-icon>\n          </button>\n          <button (click)="clear()" mat-icon-button color="warn">\n            <mat-icon>delete</mat-icon>\n          </button>\n     </div>\n    </mat-expansion-panel>\n  </mat-accordion>\n\n  <mat-table #table [dataSource]="dataSource" *ngIf="dataSource && dataSource.data.length > 0">\n\n    <ng-container matColumnDef="from">\n      <mat-header-cell *matHeaderCellDef> From </mat-header-cell>\n      <mat-cell *matCellDef="let element"> {{element.from}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef="to">\n      <mat-header-cell *matHeaderCellDef> To </mat-header-cell>\n      <mat-cell *matCellDef="let element"> {{element.to}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef="amount">\n      <mat-header-cell *matHeaderCellDef> Amount </mat-header-cell>\n      <mat-cell *matCellDef="let element"> {{element.amount}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef="result">\n      <mat-header-cell *matHeaderCellDef> Result </mat-header-cell>\n      <mat-cell *matCellDef="let element"> {{element.result}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>\n    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>\n  </mat-table>\n\n\n</div>\n'},hxJY:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,".form-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.form-container>*{width:100%}",""]),e.exports=e.exports.toString()}},[0]);