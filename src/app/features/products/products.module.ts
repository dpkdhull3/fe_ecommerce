import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCRUDService } from './services/product-crud.service';
import { ProductUtilService } from './services/product-util.service';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { S3UploaderModule } from 'ngx-s3-uploader';
import { S3UploaderService } from 'ngx-s3-uploader';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgImageSliderModule } from 'ng-image-slider';

const components = [
  ProductsComponent,
  ProductComponent]

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    S3UploaderModule.forRoot({
      region: 'ap-south-1',
      bucket: 'buckettestdpkdhull',
      credentials: { accessKeyId: 'AKIAQ45S57MVTNT7MT6V', secretAccessKey: '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' },
    }),
    MatCardModule,
    MatProgressSpinnerModule,
    NgImageSliderModule
  ],
  exports: [...components],
  providers: [ProductCRUDService, ProductUtilService, S3UploaderService]
})
export class ProductsModule { }
