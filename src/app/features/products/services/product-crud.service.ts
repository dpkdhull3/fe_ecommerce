import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct } from '../interfaces/product.interface';

@Injectable()
export class ProductCRUDService {

  private readonly PRODUCT_BASE_URL = "http://localhost:8080/products/";
  constructor(private http: HttpClient) {

   }

   public fetchAllProducts(): Observable<Array<IProduct>>{

   const OPEN_SEARCH_URL = `https://search-ecommerce-elastic-7lwzjckl34fgylx7btdtjrgnie.ap-south-1.es.amazonaws.com/products/_search?size=1000&`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('root:Dpk1@elastic'),
      }),
    };
    return this.http.get<any>(OPEN_SEARCH_URL, httpOptions).pipe(map(openSearchResponse => {

      let hits: Array<any> = openSearchResponse?.hits?.hits || [];
      hits = hits.map(hit => hit._source)
      return hits;
    }))


      return this.http.get<Array<IProduct>>(`${this.PRODUCT_BASE_URL}`);
   }

   public addProduct(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>(`${this.PRODUCT_BASE_URL}`,product);
 }
}
