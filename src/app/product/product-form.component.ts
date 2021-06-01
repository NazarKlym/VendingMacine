import {Component, OnInit } from '@angular/core';
import { Product } from '../shared/inerface';
import {ProductsService} from '../shared/products.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  name = '';
  quantity = 0;
  price = 0;
  editing = false;

  editable = false;
  addButton = 'ADD'
  List: boolean = true;

  constructor(public productsService: ProductsService) { }


  ngOnInit(): void {
  }

  addProduct(){

    if (!this.name) {
    return;}

      const product: Product = {
        name: this.name,
        price: this.price,
        quantity: this.quantity,
        editable: this.editable,
        id: Date.now(),
        editing: this.editing,
      };
      this.productsService.addProduct(product);
      this.name = ''
    }



  toggle(){
    this.List = !this.List;
  }

}