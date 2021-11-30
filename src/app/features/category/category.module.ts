import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryCRUDService } from './services/category-crud.service';
import { CategoryComponent } from './components/category/category.component';
import { CategoryUtilService } from './services/category-util.service';



@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CategoriesComponent],
  providers: [CategoryCRUDService, CategoryUtilService]
})
export class CategoryModule { }
