import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from "./features/category/components/categories/categories.component";
import { AddProductComponent } from './features/products/components/add-product/add-product.component';
import { ProductsComponent } from './features/products/components/products/products.component';

const routes: Routes = [
  {
    path: "categories",
    component: CategoriesComponent

  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
      path: "products/add",
      component: AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
