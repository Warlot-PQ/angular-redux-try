import { Component, OnInit } from '@angular/core';
import {ServiceTestService} from "../service-test.service";
import {Subscription} from "rxjs/index";
import {Article} from "../modele/article";

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  providers: [ServiceTestService],
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  private _test12Sub: Subscription;
  private _test12: number;
  private _articles: Array<Article>;
  private _serviceTestService: ServiceTestService;
  // display states
  private _hideComp1: boolean = false;
  private _hideComp2: boolean = true;
  private _hideButton: boolean = true;

  constructor(private  serviceTestService: ServiceTestService) {
    this._serviceTestService = serviceTestService;
    this._test12 = 0;
  }

  // display triggered by a model change
  ngOnInit() {
    this._test12Sub = this._serviceTestService.getCart().subscribe((cart: State) => {
      console.log("cart view updated");
      this._test12 = cart.totalPrice;
      this._articles = cart.articles;
    });
  }

  ngOnDestroy() {
    this._test12Sub.unsubscribe();
  }

  keyUpButton(e: Event) {
    if (e.keyCode === 13) {
         this._serviceTestService.addArticle(e.target.value);
    }
  }

  clickMe() {
    this._test12 = Math.random() * 10;
  }

  // display method
  statusChangeHandler(e: Event) {
    console.log('event received:');
    if (e === "from comp2") {
      console.log('showing comp1');
      this._hideComp1 = false;
      this._hideComp2 = true;
      this._hideButton = true;
    } else {
      console.log('showing comp2');
      this._hideComp1 = true;
      this._hideComp2 = false;
      this._hideButton = false
    }
  }

  get test12():number{
      return this._test12;
      }
}
