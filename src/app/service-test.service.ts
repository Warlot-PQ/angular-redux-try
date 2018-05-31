import { Injectable } from '@angular/core';

import Cart from './modele/cart'
import {Observable, Subscription} from "rxjs/index";
import {Article} from "./modele/article";

@Injectable({
  providedIn: 'root'  // singleton
})
export class ServiceTestService {

  private _cart: Cart;
  private _cartSub: Observable<Cart>;

  constructor() {
    this._cart = new Cart();
  }

  addArticle(desc: String) {
    this._cart.articles = [new Article(desc)];
    // notify viewer
    this._cartSub.onNext(this._cart);
  }

  getCart(): Observable<Cart> {
    // return Rx.Observable.of(42);
    // return new Rx.BehaviorSubject(42);

    // setInterval(() => {
    //   this._cart.totalPrice = Math.random();
    //   sub.onNext(this._cart);
    // }, 1000);

    this._cartSub = new Rx.BehaviorSubject(this._cart);
    return this._cartSub;
  }


  get cart():Cart{
      return this._cart;
      }
}
