import { Component, OnInit } from '@angular/core';
import { ICategory, ICategoryUI } from '../../interfaces/category.interface';
import { CategoryCRUDService } from '../../services/category-crud.service';
import { CategoryUtilService } from '../../services/category-util.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoryCRUDService: CategoryCRUDService, private catUtilService: CategoryUtilService) { }

  public categories: Array<ICategory> = [];
  public uiCategories: Array<ICategoryUI> = [];

  ngOnInit(): void {
    this.categoryCRUDService.fetchAllCategories().subscribe(categories => {
      this.categories = categories;
      this.uiCategories = this.catUtilService.mapToUICategories(categories);
      console.error("mapped",this.uiCategories)
    })
  }

  

}
