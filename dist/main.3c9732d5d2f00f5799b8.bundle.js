webpackJsonp([1],{0:function(t,e,o){t.exports=o("cDNt")},YuZA:function(t,e){function o(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id="YuZA"},cDNt:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("LMZF"),a=o("x8Hs"),r=o("RyBE"),i=o("MCDL"),l=o("6lRS"),c=o("TMwh"),m=(o("GQSG"),o("rLWf"),o("HECM"),o("AP4T")),s=this&&this.__assign||Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++){e=arguments[o];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},f=this&&this.__decorate||function(t,e,o,n){var a,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(i=(r<3?a(i):r>3?a(e,o,i):a(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t){this.http=t,this.loading=!1,this.displayedColumns=["amount","results","direction","action"],this.dataSource=null,this.newPortofolioItem={to:null,from:null,amount:null,cost:null},this.storageName="rates",this.portofolioItems=[],this.currencies=["BTC","ETH","LTC","EUR","GBP","USD","AUD","CAD","CZK","DKK","HKD","HUF","ILS","JPY","MXN","NZD","NOK","PLN","RON","SGD","ZAR","SEK","CHF","THB","TRY","AED","BGN","SAR","QAR"]}return t.prototype.ngOnInit=function(){this.loadRates()},t.prototype.loadRates=function(){var t=this;this.dataSource=null,this.loadFromStorage();var e=this.portofolioItems.reduce(function(t,e){return t[""+e.to+e.from]=0,t},{});if(0!==this.portofolioItems.length){this.loading=!0;var o=Object.keys(e).map(function(e){return t.http.get("https://cors-anywhere.herokuapp.com/https://www.revolut.com/api/quote/internal/"+e).map(function(t){return t.json()})});m.a.forkJoin(o).subscribe(function(o){o.forEach(function(t){e[""+t.from+t.to]=t.rate});var n=0,a=t.portofolioItems.map(function(t){var o=s({},t),a=e[""+t.to+t.from],r=t.cost/t.amount,i=a-r,l=t.amount*a,c=l-t.cost;return o.ammount=o.amount.toFixed(2),o.rateNow=a.toFixed(2),o.rateThen=r.toFixed(2),o.rateDiff=i.toFixed(2),o.valueNow=l.toFixed(2),o.diff=l.toFixed(2),o.valueDiff=c.toFixed(2),o.winning=i>0,n+=c,o});t.total=n.toFixed(2),t.dataSource=new l.B(a),t.loading=!1})}},t.prototype.addPortofolioItem=function(){this.newPortofolioItem.from&&this.newPortofolioItem.to&&this.newPortofolioItem.amount&&this.newPortofolioItem.cost&&(this.portofolioItems.push(Object.assign({id:this.guid()},this.newPortofolioItem)),this.newPortofolioItem={to:null,from:null,amount:null,cost:null},this.saveToStorage())},t.prototype.removePortofolioItem=function(t){this.portofolioItems=this.portofolioItems.filter(function(e){return e.id===t}),this.saveToStorage()},t.prototype.clearStorage=function(){localStorage.removeItem(this.storageName),this.loadRates()},t.prototype.saveToStorage=function(){localStorage.setItem(this.storageName,JSON.stringify(this.portofolioItems)),this.loadRates()},t.prototype.loadFromStorage=function(){var t=localStorage.getItem(this.storageName);this.portofolioItems=t?JSON.parse(t):[]},t.prototype.filter=function(t,e){return e?t.filter(function(t){return t!==e}):t},t.prototype.guid=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()},t=f([Object(n.m)({selector:"app-root",template:o("efyd"),styles:[o("hxJY")]}),d("design:paramtypes",[c.a])],t)}(),p=o("0nO6"),g=this&&this.__decorate||function(t,e,o,n){var a,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(i=(r<3?a(i):r>3?a(e,o,i):a(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i},h=function(){function t(){}return t=g([Object(n.H)({imports:[l.a,l.b,l.c,l.d,l.e,l.f,l.g,l.h,l.i,l.j,l.k,l.l,l.m,l.n,l.o,l.p,l.q,l.r,l.s,l.t,l.u,l.v,l.x,l.w,l.y,l.z,l.C,l.D,l.E,l.F,l.A],exports:[l.a,l.b,l.c,l.d,l.e,l.f,l.g,l.h,l.i,l.j,l.k,l.l,l.m,l.n,l.o,l.p,l.q,l.r,l.s,l.t,l.u,l.v,l.x,l.w,l.y,l.z,l.C,l.D,l.E,l.F,l.A]})],t)}(),v=this&&this.__decorate||function(t,e,o,n){var a,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(i=(r<3?a(i):r>3?a(e,o,i):a(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i},b=function(){function t(){}return t=v([Object(n.H)({declarations:[u],imports:[r.a,p.c,p.h,c.b,i.a,h],providers:[],bootstrap:[u]})],t)}();Object(n._12)(),Object(a.a)().bootstrapModule(b).catch(function(t){return console.log(t)})},efyd:function(t,e){t.exports='<div>\n  <mat-toolbar color="primary">\n    <span>Revolut Portofolio\n      <button (click)="loadRates()" mat-icon-button color="secondary">\n        <mat-icon>refresh</mat-icon>\n      </button>\n    </span>\n  </mat-toolbar>\n\n  <mat-progress-bar *ngIf=\'loading\' mode="indeterminate"></mat-progress-bar>\n\n  <mat-accordion>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Add Transaction\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <div class="form-container">\n        <mat-form-field>\n          <mat-select placeholder="From" [(value)]="newPortofolioItem.from">\n            <mat-option *ngFor="let currency of filter(currencies, newPortofolioItem.to)" [value]="currency">\n              {{ currency }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field>\n          <mat-select placeholder="To" [(value)]="newPortofolioItem.to">\n            <mat-option *ngFor="let currency of filter(currencies, newPortofolioItem.from)" [value]="currency">\n              {{ currency }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput type="number" placeholder="{{newPortofolioItem.from}} Amount Payed" [(ngModel)]="newPortofolioItem.cost">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput type="number" placeholder="{{newPortofolioItem.to}} Amount Bought" [(ngModel)]="newPortofolioItem.amount">\n        </mat-form-field>\n\n\n      </div>\n      <div>\n        <button (click)="addPortofolioItem()" mat-raised-button color="primary">\n          <mat-icon>add</mat-icon> Add\n        </button>\n        <button *ngIf="dataSource && dataSource.data.length > 0" (click)="clearStorage()" mat-raised-button color="warn">\n          <mat-icon>delete</mat-icon> Remove all\n        </button>\n      </div>\n    </mat-expansion-panel>\n  </mat-accordion>\n  <div class=\'table\'>\n    <mat-table #table [dataSource]="dataSource" *ngIf="dataSource && dataSource.data.length > 0">\n\n\n      <ng-container matColumnDef="amount">\n        <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n        <mat-cell *matCellDef="let element">\n          <div class="amount">{{element.amount}} {{element.to}}</div>\n        </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef="results">\n        <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n        <mat-cell *matCellDef="let element">\n            <div>Rate Then:\n                <strong>{{element.rateThen}}</strong>\n              </div>\n              <div>Rate Now:\n                <strong>{{element.rateNow}}</strong>\n              </div>\n              <div>Rate Diff:\n                <strong [className]="element.winning ? \'green\' : \'red\'">{{element.rateDiff}}</strong>\n              </div>\n          <div>Payed:\n            <strong>{{element.cost}} {{element.from}}</strong>\n          </div>\n          <div>Value Now:\n            <strong>{{element.valueNow}} {{element.from}}</strong>\n          </div>\n          <div>Diff:\n            <strong [className]="element.winning ? \'green\' : \'red\'">{{element.valueDiff}} {{element.from}}</strong>\n          </div>\n        </mat-cell>\n      </ng-container>\n\n\n      <ng-container matColumnDef="direction">\n        <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n        <mat-cell *matCellDef="let element">\n          <div [className]="element.winning ? \'green\' : \'red\'">\n            <mat-icon *ngIf=\'element.winning\'>arrow_upward</mat-icon>\n            <mat-icon *ngIf=\'!element.winning\'>arrow_downward</mat-icon>\n          </div>\n        </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef="action">\n        <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n        <mat-cell *matCellDef="let element">\n          <button (click)="removePortofolioItem(element.id)" mat-icon-button color="warn">\n            <mat-icon>delete</mat-icon>\n          </button>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>\n      <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>\n    </mat-table>\n  </div>\n  <div *ngIf="dataSource && dataSource.data.length > 0" class=\'total\'>\n    Total: {{total}}\n  </div>\n\n</div>\n'},hxJY:function(t,e,o){(t.exports=o("rP7Y")(!1)).push([t.i,".form-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.form-container>*{width:100%}.mat-row{-webkit-box-align:initial;-ms-flex-align:initial;align-items:initial;padding-top:20px;padding-bottom:20px}.mat-column-action{max-width:40px;text-align:center}.mat-column-direction{text-align:center}.amount{font-size:13px}.green{color:#006400}.red{color:darkred}.table{padding-top:10px}.total{font-family:Roboto,Helvetica Neue,sans-serif;color:#a9a9a9;padding:20px;font-size:13px}",""]),t.exports=t.exports.toString()}},[0]);