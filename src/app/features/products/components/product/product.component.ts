import { Component, Input, OnInit } from '@angular/core';
import { IProduct, IProductSlide } from '../../interfaces/product.interface';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  @Input("product") public product: IProduct;

  public imagesForSlider: Array<IProductSlide> = [];

  constructor() { 

  }

  ngOnInit(): void {
    this.prepareProductSlides();
  }

  private prepareProductSlides():void{
    const slideItems:Array<IProductSlide> = [];
    for(const img of this.product.productImage){
      slideItems.push({
        image: img,
        alt: "alt",
        thumbImage: img
      })
    }
    console.error(slideItems)
    this.imagesForSlider = slideItems;
  }

}
