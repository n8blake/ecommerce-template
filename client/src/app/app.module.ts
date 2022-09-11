import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavComponent } from './common/nav/nav.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { CartComponent } from './cart/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    ProductsPageComponent,
    ProductsListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
