import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct } from '../../products/interfaces/product.interface';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  public searchProducts(searchString: string): Observable<Array<IProduct>> {
    const OPEN_SEARCH_URL = `https://search-ecommerce-elastic-7lwzjckl34fgylx7btdtjrgnie.ap-south-1.es.amazonaws.com/products/_search?size=1000&`;
    const finalUrl = searchString ? `${OPEN_SEARCH_URL}q=${searchString}` : OPEN_SEARCH_URL;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('root:Dpk1@elastic'),
      }),
    };
    return this.http.get<any>(finalUrl, httpOptions).pipe(map(openSearchResponse => {

      let hits: Array<any> = openSearchResponse?.hits?.hits || [];
      hits = hits.map(hit => hit._source)
      return hits;
    }))
  }
}
