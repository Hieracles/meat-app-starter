import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';
import { ShoppingCartService } from './shopping-cart.services';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService : ShoppingCartService) { }

  ngOnInit() {

  }

  items() : any[]{
    return this.shoppingCartService.items;
  }

  total() : number{
    return this.shoppingCartService.total();
  }

  removeItem(item : CartItem){
    this.shoppingCartService.removeItem(item);
  } 

  addItem(item : MenuItem){
    this.shoppingCartService.addItem(item);
  }  

  clear(){
    this.shoppingCartService.clear();
  }

}
