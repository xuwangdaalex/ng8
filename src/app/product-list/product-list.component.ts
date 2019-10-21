import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  selectedCategory = null;
  selectedSubcategory = null;
  newproduct: string;

  categoryList = [
    {
      CategoryId: 'c1',
      CategoryName: 'category1'
    },
    {
      CategoryId: 'c2',
      CategoryName: 'category2'
    }
  ]

  subcategoryList = [
    {
      SubcategoryId: 'audi',
      CategoryId: 'c1',
      SubcategoryName: 'Audi'
    },
    {
      SubcategoryId: 'bmw',
      CategoryId: 'c1',
      SubcategoryName: 'BMW'
    },
    {
      SubcategoryId: 'mazda',
      CategoryId: 'c2',
      SubcategoryName: 'Mazda'
    },
    {
      SubcategoryId: 'honda',
      CategoryId: 'c2',
      SubcategoryName: 'Honda'
    }
  ]

  productList = [
    {
      CategoryId: 'c1',
      SubcategoryId: 'audi',
      ProductId: 'rs5',
      ProductName: 'rs5'
    },
    {
      CategoryId: 'c1',
      SubcategoryId: 'audi',
      ProductId: 'a7',
      ProductName: 'a7'
    },
    {
      CategoryId: 'c1',
      SubcategoryId: 'bmw',
      ProductId: 'm4',
      ProductName: 'm4'
    },
    {
      CategoryId: 'c2',
      SubcategoryId: 'mazda',
      ProductId: 'cx9',
      ProductName: 'cx9'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  changeCategory() {
    this.selectedSubcategory = null;
  }

  addProduct() {
    if (this.newproduct) {
      const obj = {
        CategoryId: this.selectedCategory,
        SubcategoryId: this.selectedSubcategory,
        ProductId: this.newproduct,
        ProductName: this.newproduct
      };
      this.productList.push(obj);
      this.newproduct = '';
    }
  }


}
