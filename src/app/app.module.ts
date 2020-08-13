import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ShopComponent} from './shop/shop/shop.component';
import {FormsModule} from '@angular/forms';
import {MenuComponent} from './menu/menu.component';
import {ShopDialogComponent} from './shop/shop-dialog/shop-dialog.component';
import {DialogModule} from 'primeng';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    MenuComponent,
    ShopDialogComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        DialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
