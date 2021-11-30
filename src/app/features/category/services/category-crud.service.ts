import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/category.interface';

@Injectable()
export class CategoryCRUDService {

  private readonly CATEGORY_BASE_URL = "http://localhost:8080/categories/";
  constructor(private http: HttpClient) {

   }

   public fetchAllCategories(): Observable<Array<ICategory>>{
      return this.http.get<Array<ICategory>>(`${this.CATEGORY_BASE_URL}`);
   }
}
