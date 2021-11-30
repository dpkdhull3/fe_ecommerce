import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryModule } from './features/category/category.module';
import { ProductsModule } from './features/products/products.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CategoryModule,
    ProductsModule
  ],
  providers: [],
  exports: [FormsModule,ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
