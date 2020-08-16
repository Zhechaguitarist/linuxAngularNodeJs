import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ShopComponent} from './shop/shop/shop.component';
import {FormsModule} from '@angular/forms';
import {MenuComponent} from './menu/menu.component';
import {ShopDialogComponent} from './shop/shop-dialog/shop-dialog.component';
import {ButtonModule, DialogModule} from 'primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    DialogModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
