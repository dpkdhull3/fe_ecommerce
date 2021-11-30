import { Component, Input, OnInit } from '@angular/core';
import { ICategory, ICategoryUI } from '../../interfaces/category.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input("category") public category: ICategoryUI;

  constructor() { }

  ngOnInit(): void {
  }

}
