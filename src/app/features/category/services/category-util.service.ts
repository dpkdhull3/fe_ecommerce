import { Injectable } from '@angular/core';
import { ICategory, ICategoryUI } from '../interfaces/category.interface';

@Injectable()
export class CategoryUtilService {

  constructor() { }




  public mapToUICategories(serverCategories: Array<ICategory>, parent?: any, tree?:Array<any> ):Array<ICategoryUI>{
   const ref = this;
    tree = typeof tree !== 'undefined' ? tree : [];
    parent = typeof parent !== 'undefined' ? parent : { categoryId: null};
        
    var children = serverCategories.filter(function(serverCategory){ return serverCategory.parentCategory == parent?.categoryId; });
    if(children?.length){
        if( parent.categoryId == null){
           tree = children;   
        }else{
           parent['childCategories'] = children
        }
        children.forEach(function( child ){ 
            ref.mapToUICategories( serverCategories, child ) 
          
        } );                    
    }
    
    return tree;
}


}
