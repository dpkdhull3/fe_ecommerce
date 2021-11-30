import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { S3UploaderService } from 'ngx-s3-uploader';
import { S3ManagerService } from './../../../../shared/services/s3-manager.service';
import { IProduct } from '../../interfaces/product.interface';
import { ProductCRUDService } from '../../services/product-crud.service';
import { IS3UploadResponse } from 'src/app/shared/interfaces/s3-config.interface';
import { timeStamp } from 'console';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  public productForm: FormGroup;
  public processing = false;

  constructor(
    private formBuilder: FormBuilder,
    private productCRUDService: ProductCRUDService,
    private s3Uploader: S3UploaderService,
    private router: Router,
    private s3ManagerService: S3ManagerService
  ) {}

  public files: Array<any>;
  public imageLocations: Array<string> = [];

  ngOnInit(): void {
    this.prepareProductForm();
  }

  private prepareProductForm(): void {
    this.productForm = this.formBuilder.group({
      productName: ['Product '],
      price: [100],
      productDescription: ['Product Description'],
      stocksQuantity: [100],
      discountPercentage: [10]
    });
  }

  public onSubmit(): void {
    this.processing = true;
    console.log(this.productForm.value);
    const product: IProduct = {
      productName: this.productForm.get('productName').value,
      price: this.productForm.get('price').value,
      productImage: this.imageLocations,
      productDescription: this.productForm.get('productDescription').value,
      stocksQuantity: this.productForm.get('stocksQuantity').value,
      discountPercentage: this.productForm.get('discountPercentage').value
    };
    this.productCRUDService.addProduct(product).subscribe((_) => {
      this.processing = false;
      this.router.navigate(["products"]);
      console.log('added');
    });
  }

  public uploaded(e: any) {
    console.log('uploaded', e);
  }

  public uploadError(e) {
    console.log('error', e);
  }

  public setFile(event) {
    console.log(typeof event);
    this.files = event.srcElement.files;
    this.uploadFile();
  }

  // TO-Do : How to delete s3 file programatically
  public uploadFile() {
    
    console.log('upload it', this.files);
    for (let i = 0; i < this.files.length; i++) {
      const file = this.files[i];
      const uid =
        "products/" + Date.now().toString(36) + Math.random().toString(36).substr(2);
        this.processing = true;
        
      this.s3ManagerService.uploadFilesToBucket({
        Body: file,
        Key: uid
      }, this.handleUploadResponse.bind(this))
    }
    this.files = [];
  }

  private handleUploadResponse(error: any, file:IS3UploadResponse):void{
    console.error(file)
    if(file){
      this.imageLocations.push(file.Location)
    }
  }
}
