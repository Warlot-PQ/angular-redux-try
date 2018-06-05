import { Injectable } from '@angular/core';

import Cart from '../modele/cart'
import {Observable, BehaviorSubject} from "rxjs/index";
import {Article} from "../modele/article";

@Injectable({
  providedIn: 'root'  // singleton
})
export class ServiceTestService {

  private _cart: Cart;
  private _cartSub: any;

  constructor() {
    this._cart = new Cart();
  }

  addArticle(desc: String) {
    this._cart.articles = [new Article(desc)];
    // notify viewer
    this._cartSub.next(this._cart);
  }

  getCart(): Observable<Cart> {
    this._cartSub = new BehaviorSubject(this._cart);
    return this._cartSub;
  }


  get cart():Cart{
      return this._cart;
      }
}
